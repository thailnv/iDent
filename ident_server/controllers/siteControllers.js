const { User } = require("../models/userModel");
const { Dentist } = require("../models/dentistModel");
const { Service } = require("../models/serviceModel");
const { Degree } = require("../models/degreeModel");
const { Shift } = require("../models/shiftModel");
const { Schedule } = require("../models/scheduleModel");

exports.getAdminInfo = async (req, res, next) => {
  try {
    const users = await User.find({}).lean();
    const dentists = await Dentist.find({}).populate("degree").lean();
    const degrees = await Degree.find({}).lean();
    const services = await Service.find({}).lean();
    const shifts = await Shift.find({}).lean();
    const schedules = await Schedule.find({})
      .populate("dentist", "name phone")
      .sort("-year -month -day")
      .lean();
    res.status(200).json({
      status: "success",
      users: users.length,
      services,
      dentists,
      degrees,
      shifts,
      schedules,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter",
    });
  }
};
