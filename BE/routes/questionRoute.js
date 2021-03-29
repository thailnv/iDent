const express = require('express');
const router = express.Router();

const validator = require('../middleware/validate');
const { validate } = require('../models/questionModel');
const questionController = require('../controllers/questionControllers');

router.get('/', questionController.getAll);
router.get('/:id', questionController.getOne);
router.post('/', validator(validate), questionController.addOne);

module.exports = router;
