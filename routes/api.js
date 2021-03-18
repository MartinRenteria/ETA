const router = require("express").Router();
const { User } = require("../Models");
const db = require("../Models");

db.User.create({
  name: "brian",
  email: "brian@gmail.com",
  title: "director of awesomeness",
  password: "password"
  // user: user._id //assign the _id from the user})
})
  .then(dbUser => {
    console.log(dbUser);
  })
  .catch(({ message }) => {
    console.log(message);
  });

module.exports = router;

// async function insertStuff() {
//   try {
//     const user = await User.create({
//       name: "brian",
//       email: "brian@gmail.com",
//       title: "director of awesomeness",
//       username: "brians-123",
//       password: "password",
//       user: user._id //assign the _id from the user
//     });
//     try {
//       const survey1 = await Survey.create({
//         questionOneScore: 5,
//         questionTwoScore: 6
//       });
//     } catch (error) {
//       console.log("error saving survey");
//     }
//   } catch (error) {
//     console.log("error saving user");
//   }
// }

// User.findOne({ name: "Brian" })
//   .populate("surveys")
//   .exec((err, user) => {
//     if (err) return console.log(err);
//     //commenting this out for simple console.log for now
//     // if (err) return handleError(err);
//     // console.log(user.surveys[0].body);
//   });
