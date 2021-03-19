const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  //MVP path will be to just use a number that will correspond to the survey field
  questionNumber: {
    type: Number,
    unique: true
  },
  questionText: String,
  goodAnswerOne: String,
  goodAnswerTwo: String,
  goodAnswerThree: String,
  goodAnswerFour: String,
  badAnswerOne: String,
  badAnswerTwo: String,
  badAnswerThree: String,
  badAnswerFour: String
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
