const router = require('express').Router();

const testController = require('../controllers/testController');
const validator = require('../middleware/validate');
const { validate } = require('../models/testModel');

router.get('/', testController.getAll);
router.get('/:id', testController.getOne);
router.post('/', validator(validate), testController.addOne);
router.delete('/:id', testController.deleteOne);

module.exports = router;
