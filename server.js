const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

// Adding passport authenication to project
const passport = require("passport");
app.use(passport.initialize());

// Passport config
passport.use( require("./config/jwtPassportStrategy") );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)

// Add API routes for authentication
app.use( "./api", require("./routes/authentication") );

//Send every request to the React app
//Define any API Routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ETA",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});