const mongoose = require("mongoose");
const joi = require("joi");

const appointmentSchema = mongoose.Schema(
  {
    name: String,
    service: String,
    hour: Number,
    minute: Number,
    year: Number,
    month: Number,
    day: Number,
    email: String,
  },
  {
    versionKey: false,
  }
);

function validate(appointment) {
  const schema = joi.object({
    name: joi.string().min(5).required(),
    service: joi.string().min(5).required(),
    hour: joi.number().min(0).max(24).required(),
    minute: joi.number().min(0).max(60).required(),
    year: joi.number().min(0).required(),
    month: joi.number().min(1).max(12).required(),
    day: joi.number().min(1).max(31).required(),
    email: joi.string().email().required(),
  });
  return schema.validate(appointment);
}

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = {
  Appointment,
  validate,
};
