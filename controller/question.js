const Question = require('../data/question-and-key');

exports.sendQsTo = (req, res) => {
    let {number} = req.body;
    Question.sendQuestion(number, data => {
        res.send(data);
    });
}

exports.sendCheckTo = (req, res) => {
    let {number} = req.body;
    let {choice} = req.body;
    Question.checkKey(number, choice, data => {
        res.send(data);
    });
}