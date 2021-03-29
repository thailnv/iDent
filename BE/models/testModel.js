const mongoose = require('mongoose');
const joi = require('joi')
const testSchema = new mongoose.Schema({
    name: String,
    scriptURL: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'question' }]
});

const validate = (test) => {
    const schema = joi.object({
        name: joi.string().min(4).required(),
        scriptURL: joi.string().required(),
        questions: joi.array().min(1).required()
    });

    return schema.validate(test);
}

const Test = mongoose.model('test', testSchema);

module.exports = {
    Test,
    validate
}