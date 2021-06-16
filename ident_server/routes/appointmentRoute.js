const express = require("express");
const router = express.Router();
const validator = require("../middleware/validate");
const { validate } = require("../models/appointmentModel");
const auth = require("../middleware/auth");
const { scheduleEmail } = require("../services/mailServices");
const controller = require("../controllers/appointmentController");

router.post("/", validator(validate), controller.addOne, scheduleEmail);
router.use(auth.protect);
router.get("/by_user", controller.getByUserId);
router.get("/by_email", controller.getOneByEmail);
router.delete("/:id", controller.cancel);
router.get("/:id", controller.getOne);
router.use(auth.restrictTo("admin"));
router.get("/", controller.getAll);

module.exports = router;
