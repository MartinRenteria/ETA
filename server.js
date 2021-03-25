require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Adding passport authenication to project
const passport = require("passport");
app.use(passport.initialize());

// Passport config
passport.use(require("./config/jwtPassportStrategy"));

//Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add API routes for authentication
app.use(
  "/api",
  require("./routes/authentication"),
  require("./routes/apiRoutes")
);

//Send every request to the React app
//Define any API Routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ETA");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
