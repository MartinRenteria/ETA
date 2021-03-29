const router = require("express").Router();
// const model = require("../models");
const { Survey } = require("../models");
const { User } = require("../models");

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
  Survey.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    {
      new: true
    }
  )
    .then(dbSurvey => {
      res.json(dbSurvey);
    })
    .catch(err => {
      res.json(err);
    });
});

/*Employee*/
//get route - get the results for the current employee
//to do for later
router.get("/surveys", (req, res) => {
  Survey.find({})
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
//post route - we can load these into the database
//get route - get the questions

module.exports = router;
