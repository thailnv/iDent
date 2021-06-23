const mongoose = require("mongoose");
const joi = require("joi");

const dentistSchema = mongoose.Schema({
  name: String,
  degree: { type: mongoose.Schema.Types.ObjectId, ref: "degree" },
  idNumber: String,
  phone: String,
  img: String,
  description: String,
  rating: {
    type: Number,
    default: 5.0,
  },
  yearExperience: Number,
  patient: {
    type: Number,
    default: 0,
  },
  expert: [{ type: mongoose.Schema.Types.ObjectId, ref: "service" }],
});

const validate = (dentist) => {
  const schema = joi
    .object({
      name: joi.string().required().min(5),
      degree: joi.string().required(),
      idNumber: joi.string().min(9).required(),
      patient: joi.number(),
      rating: joi.number(),
      phone: joi.string().required(),
      img: joi.string(),
      yearExperience: joi.number().min(0),
      description: joi.string(),
      expert: joi.array().items(joi.string()).required(),
    })
    .unknown(true);
  return schema.validate(dentist);
};

const Dentist = mongoose.model("dentist", dentistSchema);

module.exports = {
  Dentist,
  validate,
};
