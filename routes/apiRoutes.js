const router = require("express").Router();
// const model = require("../models");
const { Survey } = require("../models");
const { User } = require("../models");

/*Users*/
//post route - create a new user. Leverage functionality already created for auth - verify the individual contributor checkbox is working

//at login, determine credentials and if they should go to employee/employer route - Martin is taking this one

/*Employee-Survey*/
//post route - use on the first clock in
router.post("/surveys", (req, res) => {
  console.log(req.body);
  Survey.create(req.body)
    .then(dbSurvey => {
      res.json(dbSurvey);
    })
    .catch(err => {
      res.json(err);
    });
});
//put route - use on clock out, 2nd clock in, 2nd clock out, and survey answers for questions 1-5
router.put("/surveys/:id", (req, res) => {
  //in a real case, we need to find by the date and employee number
  Survey.findByIdAndUpdate(
    req.params.id,
    //this needs to be updated
    { $push: { dbSurvey: req.body } },
    {
      new: true,
      runValidators: true //look at this later
    }
  )
    .then(dbSurvey => {
      res.json(dbSurvey);
    })
    .catch(err => {
      res.json(err);
    });
});

/*Employer-Surveys*/
//get route - get the results for all employees (mvp, later will add by manager) use for chart
router.get("/employer", (req, res) => {
  Survey.find({})
    .then(dbSurvey => {
      res.json(dbSurvey);
    })
    .catch(err => {
      res.json(err);
    });
});

/*Questions - using an array instead for now*/
// post route - we can load these into the database
//get route - get the questions and

module.exports = router;
