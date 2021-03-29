const mongoose = require('mongoose');
const joi = require('joi');

const answerSchema = new mongoose.Schema({
    content: String,
    isTrue: Boolean
}, {
    versionKey: false,
    _id: false
});

const questionSchema = new mongoose.Schema({
    content: {
        type: String,
        trim: true
    },
    explanation: String,
    type: {
        type: String,
        enum: ['incomplete sentence', 'paragraph'],
        default: 'incomplete sentence'
    },
    part: Number,
    imgURL: String,
    answers: [answerSchema]
}, {
    versionKey: false
});

const validate = (question) => {
    const schema = joi.object({
        content: joi.string().min(10).required(),
        explanation: joi.string().min(10).required(),
        answers: joi.array().length(4).required(),
        part: joi.number().min(1).max(7).required(),
        type: joi.string()
    });
    return schema.validate(question);
}

const Question = mongoose.model('question', questionSchema);

module.exports = {
    Question,
    validate
}