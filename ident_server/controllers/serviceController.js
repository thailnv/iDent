const { Service } = require("../models/serviceModel");
const { Appointment } = require("../models/appointmentModel");
const {
  sendEmail,
  createCancelEmail_StopService,
} = require("../services/mailServices");
const base = require("./baseController");

exports.addOne = base.addOne(Service);
exports.getAll = async (req, res) => {
  try {
    let docs = await Service.find({
      status: { $nin: ["stop serving"] },
    }).lean();
    if (docs) {
      res.status(200).json({
        docs,
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "No document found with that id!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter!",
    });
  }
};
exports.getOne = base.getOne(Service);
exports.updateOne = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body);
    if (service.status === "serving" && req.body.status === "stop serving") {
      console.log("oh no");
      const appointments = await Appointment.find({
        status: {
          $nin: ["canceled", "expired"],
        },
        service: service._id,
      })
        .populate("dentist", "name")
        .populate("customer", "name")
        .populate("service", "name");
      for (let i = 0; i < appointments.length; i++) {
        appointments[i].status = "canceled";
        await appointments[i].save();
        let emailMsg = createCancelEmail_StopService(
          appointments[i].dentist.name,
          `${appointments[i].day}/${appointments[i].month}/${appointments[i].year}`,
          `${appointments[i].hour}:${appointments[i].minute}`,
          appointments[i].service.name,
          appointments[i].customer.name,
          appointments[i].email
        );
        await sendEmail(emailMsg)
          .then(() => {
            console.log("Send cancel mail OK");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter !",
    });
  }
};
exports.deleteOne = base.deleteOne(Service);
