const mongoose = require("mongoose");
const joi = require("joi");

const serviceSchema = mongoose.Schema(
  {
    name: String,
    time: Number,
    from: Number,
    to: Number,
    rating: {
      type: Number,
      default: 5,
    },
    img: String,
    status: {
      type: String,
      enum: ["Serving", "Stop serving"],
      default: "Serving",
    },
  },
  {
    versionKey: false,
  }
);

const validate = (degree) => {
  const schema = joi.object({
    name: joi.string().min(5).required(),
    time: joi.number().required(),
    rating: joi.number(),
    from: joi.number().required(),
    to: joi.number().required(),
    status: joi.string(),
    img: joi.string(),
  });
  return schema.validate(degree);
};

const Service = mongoose.model("service", serviceSchema);

module.exports = {
  Service,
  validate,
};
