const base = require('./baseController');
const { Test } = require('../models/testModel');
const { Question, validate } = require('../models/questionModel');

exports.getOne = async (req, res, next) => {
    try {
        let test = await Test.findById(req.params.id).populate('questions');
        if (test) {
            res.status(200).json({
                test
            })
        } else {
            res.status(400).json({
                status: 'This test has been removed!'
            })
        }
    }
    catch (error) {
        res.status(400).send('Files not found');
        next(error);
    }

}
exports.getAll = base.getAll(Test);
exports.addOne = async (req, res, next) => {
    try {
        let errorList = [];
        let questions = [];

        for (let i = 0; i < req.body.questions.length; i++) {
            //validate each question in test
            let { error } = validate(req.body.questions[i]);
            if (error)
                errorList.push(`Err question ${i + 1} ` + error.details[0].message)
            else {
                let question = new Question(req.body.questions[i]);
                questions.push(question);
            }
        }

        //all question are ok
        if (errorList.length === 0) {

            //create new test in db
            const test = new Test({
                name: req.body.name,
                scriptURL: req.body.scriptURL
            });

            for (let i = 0; i < questions.length; i++) {

                //check if question already exist
                let question = await Question.findOne({
                    content: questions[i].content
                });

                //yes ? push the test id into test_id field
                if (question) {
                    test.questions.push(question._id);
                }
                else {
                    //no create new question
                    test.questions.push(questions[i]._id);
                    await questions[i].save();
                }
            }

            await test.save();

            res.status(200).json({
                status: 'success',
                data: test,
            });
        } else {
            res.status(400).json({
                status: 'Sorry some questions have error!',
                error: errorList
            });
        }
    }
    catch (error) {
        res.status(400).json({
            status: 'Fail when storing test to the database!',
            error: error.message
        });
        next(error);
    }
}
exports.deleteOne = base.deleteOne(Test);