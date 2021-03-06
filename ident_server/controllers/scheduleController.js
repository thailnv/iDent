const base = require("./baseController");
const c = require("../constants");
const { Schedule } = require("../models/scheduleModel");
const { Dentist } = require("../models/dentistModel");
const { Degree } = require("../models/degreeModel");
const { User } = require("../models/userModel");
const { Appointment } = require("../models/appointmentModel");
const {
  sendEmail,
  createCancelEmail_DentistOff,
} = require("../services/mailServices");
exports.addOne = async (req, res, next) => {
  const currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  if (
    !(req.body.year >= year && req.body.month >= month && req.body.day >= day)
  ) {
    res.status(404).json({
      status: "fail",
      message: "You can not select day in the past !",
    });
    return;
  }
  try {
    const { dentist, day, month, year } = req.body;
    let schedule = await Schedule.findOne({
      dentist,
      day,
      month,
      year,
    });
    if (schedule) {
      res.status(400).json({
        status: "fail",
        message: "Dentist already have schedule on this day !",
      });
      return;
    }

    const doc = await Schedule.create(req.body);

    res.status(201).json({
      status: "success",
      data: doc,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter",
    });
    next(error);
  }
};
exports.getOne = async (req, res, next) => {
  try {
    let doc = await Schedule.findById(req.params.id)
      .populate("shifts")
      .populate({
        path: "dentist",
        populate: [
          {
            path: "degree",
          },
          {
            path: "expert",
          },
        ],
      })
      .lean(); //populate theo ten thuoc tinh k phai ten bang
    if (doc) {
      res.status(200).json({
        doc,
      });
    } else {
      res.status(400).json({
        status: "Can find any doc with that id!",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Server can handle this request right now!",
    });
    next(error);
  }
};
exports.getAll = async (req, res, next) => {
  let options = {};
  if (req.query.day) options.day = req.query.day;
  if (req.query.month) options.month = req.query.month;
  if (req.query.year) options.year = req.query.year;
  if (req.query.dentist) options.dentist = req.query.dentist;
  if (req.query.shift) options.shift = { $in: [req.query.shift] };
  try {
    let doc = await Schedule.find(options)
      .populate("shifts")
      .populate({
        path: "dentist",
        populate: [
          {
            path: "degree",
          },
          {
            path: "expert",
          },
        ],
      })
      .lean();
    if (doc) {
      res.status(200).json({
        doc,
      });
    } else {
      res.status(400).json({
        status: c.STATUS_FAILURE,
        message: c.DOCUMENT_NOT_FOUND_ERROR,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: c.STATUS_FAILURE,
      message: c.UNKNOWN_ERROR_MSG,
    });
    next(error);
  }
};
exports.updateOne = async (req, res, next) => {
  try {
    const { day, month, year, dentist, shifts } = req.body;
    let schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (schedule) {
      let appointments = await Appointment.find({
        year,
        month,
        day,
        dentist,
        status: {
          $nin: ["canceled", "expired"],
        },
      })
        .populate("dentist", "name")
        .populate("customer", "name")
        .populate("service", "name");
      for (let i = 0; i < appointments.length; i++) {
        if (schedule.shifts.indexOf(appointments[i].shift) === -1) {
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
        appointments,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "No schedule found !",
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
exports.deleteOne = async (req, res, next) => {
  try {
    let schedule = await Schedule.findByIdAndDelete(req.params.id);
    const { day, month, year, dentist } = schedule;
    if (schedule) {
      let appointments = await Appointment.find({
        year,
        month,
        day,
        dentist,
        status: {
          $nin: ["canceled", "expired"],
        },
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
      res.status(200).json({
        status: "success",
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "No schedule found !",
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
