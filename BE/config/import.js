const fs = require('fs');
const mongoose = require('mongoose');

const { Question } = require('../models/questionModel');

fs.readFile(__dirname + '/data.json', async (err, data) => {
    if (err) {
        console.log('Error when reading file!');
        return;
    }
    await mongoose.connect('mongodb://localhost:27017/project_db',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    try {
        const questions = JSON.parse(data);
        await Question.deleteMany({});
        for (let i = 0; i < questions.length; i++) {
            let question = new Question(questions[i]);
            await question.save();
        }
    }
    catch (err) {
        console.log('Can not import data!');
    }
    await mongoose.disconnect();

});
