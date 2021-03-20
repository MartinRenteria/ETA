const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
  clockInOne: Date,
  clockOutOne: Date,
  clockInTwo: Date,
  clockOutTwo: Date,
  hoursWorked: Number,
  questionOneScore: Number,
  questionTwoScore: Number,
  //note that this reverse relationship isn't part of the example
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

const Survey = mongoose.model("Survey", SurveySchema);

module.exports = Survey;
