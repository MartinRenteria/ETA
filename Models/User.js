const mongoose = require("mongoose");
//this reset the schema and model when I received
//OverwriteModelError
// mongoose.models = {};
// mongoose.modelSchemas = {};

const Schema = mongoose.Schema;

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema({
  name: {
    type: String,
    required: "Add your name"
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please add a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email address"
    ]
  },
  title: {
    type: String,
    required: "Add your title"
  },
  //this will be true if they don't have any direct reports. They are timecard users.
  individualContributor: Boolean,
  //note this is not required as we need a 'ceo'
  managerId: Number,
  username: {
    type: String,
    required: "Add your username"
  },
  password: {
    //is there a password type that will be covered with auth?
    type: String,
    required: "Add your password"
  },
  surveys: [{ type: Schema.Types.ObjectId, ref: "Survey" }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;