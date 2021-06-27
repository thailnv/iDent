const { Dentist, validate } = require("../models/dentistModel");
const base = require("./baseController");
const { Appointment } = require("../models/appointmentModel");
const {
  sendEmail,
  createCancelEmail_DentistOff,
} = require("../services/mailServices");

exports.addOne = base.addOne(Dentist);
exports.getAll = async (req, res) => {
  try {
    let docs = await Dentist.find({ status: { $nin: ["stop working"] } })
      .populate(["expert", "degree"])
      .lean();
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
exports.getOne = base.getOnePopulate(Dentist, ["degree", "expert"]);
exports.deleteOne = base.deleteOne(Dentist);
exports.updateOne = async (req, res) => {
  try {
    let dentist = await Dentist.findByIdAndUpdate(req.params.id, req.body);
    if (dentist) {
      if (dentist.status === "working" && req.body.status === "stop working") {
        console.log("oh no");
        let appointments = await Appointment.find({
          status: {
            $nin: ["canceled", "expired"],
          },
          dentist: dentist._id,
        })
          .populate("dentist", "name")
          .populate("customer", "name")
          .populate("service", "name");
        for (let i = 0; i < appointments.length; i++) {
          appointments[i].status = "canceled";
          await appointments[i].save();
          let emailMsg = createCancelEmail_DentistOff(
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
    } else {
      res.status(404).json({
        status: "fail",
        message: "No dentist found !",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter !",
    });
  }
};
