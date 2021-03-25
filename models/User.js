const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validateEmail = function (email) {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema({
  firstName: {
    type: String
    // required: "Add your name"
  },
  lastName: {
    type: String
    // required: "Add your name"
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    // required: "Email address is required",
    validate: [validateEmail, "Please add a valid email address"],
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email address"
    ]
  },
  title: {
    type: String
    // required: "Add your title"
  },
  //this will be true if they don't have any direct reports. They are timecard users.
  individualContributor: Boolean,
  //note this is not required as we need a 'ceo'
  // managerId: Number,
  password: {
    type: String,
    required: "Add your password"
  },
  surveys: [{ type: Schema.Types.ObjectId, ref: "Survey" }]
});
//get all of the surveys
//db.user.findById().populate("surveys").then(res.json, etc.)
//find a user and .populate grabs all of the surveys and
//fills them in with the survey data

const User = mongoose.model("User", UserSchema);

module.exports = User;
