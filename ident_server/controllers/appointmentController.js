const c = require("../constants");
const base = require("./baseController");
const { Appointment, validate } = require("../models/appointmentModel");

exports.addOne = base.addOne(Appointment);
exports.getAll = base.getAll(Appointment);
exports.getOne = base.getOne(Appointment);
exports.updateOne = base.updateOne(Appointment);
exports.deleteOne = base.deleteOne(Appointment);
exports.getOneByEmail = async (req, res, next) => {
  try {
    console.log(req.user);
    const doc = await Appointment.find({ email: req.user.email }).lean();
    if (!doc) {
      res.status(404).send("No appointment found with that email");
      return;
    }
    res.status(200).json({
      status: "success",
      data: doc,
    });
  } catch (error) {
    next(error);
  }
};
