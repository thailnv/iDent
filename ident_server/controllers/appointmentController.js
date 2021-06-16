const c = require("../constants");
const base = require("./baseController");
const { Appointment, validate } = require("../models/appointmentModel");
const { Schedule } = require("../models/scheduleModel");

exports.addOne = async (req, res, next) => {
  if (req.sendEmailErr) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter",
    });
    return;
  }
  try {
    let currentAppointment = await Appointment.findOne({
      service: req.body.service,
      shift: req.body.shift,
      customer: req.body.customer,
      dentist: req.body.dentist,
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
    });
    if (currentAppointment) {
      res.status(400).json({
        status: "fail",
        message:
          "You already have an appointment for this service at this time !",
      });
      return;
    }

    let appointment = await Appointment.create(req.body);
    let schedule = await Schedule.findOne({
      dentist: req.body.dentist,
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
    });

    if (schedule) {
      let shiftIndex = schedule.shifts.indexOf(req.body.shift);
      schedule.time[shiftIndex] -= req.body.time;
      schedule.markModified("time");
      await schedule.save();
    }

    res.status(201).json({
      status: "success",
      appointment,
    });
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter",
    });
  }
};
exports.getAll = base.getAll(Appointment);
exports.getOne = base.getOne(Appointment);
exports.updateOne = base.updateOne(Appointment);
exports.deleteOne = base.deleteOne(Appointment);
exports.getOneByEmail = async (req, res, next) => {
  try {
    const doc = await Appointment.find({ email: req.user.email }).lean();
    if (!doc) {
      res.status(404).json({
        message: c.APPOINTMENT_NOT_FOUND_MSG,
      });
      return;
    }
    res.status(200).json({
      status: c.STATUS_SUCCESS,
      data: doc,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: c.STATUS_FAILURE,
      message: c.UNKNOWN_ERROR_MSG,
    });
    next(error);
  }
};
exports.getByUserId = async (req, res, next) => {
  try {
    let appointments = await Appointment.find({
      customer: req.user._id,
    })
      .sort("-year -month -day")
      .select("-customer")
      .populate({
        path: "dentist",
        select: "name img",
        populate: {
          path: "degree",
        },
      })
      .populate("service", "name");
    let date = new Date();
    for (let i = 0; i < appointments.length; i++) {
      if (
        appointments[i].month < date.getMonth() + 1 ||
        (appointments[i] === date.getMonth() + 1 &&
          appointments[i].day < date.getDate())
      ) {
        appointments[i].status = "expired";
        await appointments[i].save();
      }
    }
    res.status(200).json({
      status: "success",
      appointments,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter",
    });
  }
};
exports.cancel = async (req, res, next) => {
  try {
    let appointment = await Appointment.findById(req.params.id).populate(
      "service",
      "time"
    );
    let schedule = await Schedule.findOne({
      dentist: appointment.dentist,
      day: appointment.day,
      month: appointment.month,
      year: appointment.year,
    });
    let shiftIndex = schedule.shifts.indexOf(appointment.shift);
    schedule.time[shiftIndex] += appointment.service.time;
    schedule.markModified("time");
    await schedule.save();
    await appointment.remove();
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter!",
    });
  }
};
