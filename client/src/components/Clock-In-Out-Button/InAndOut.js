import React, { useState } from "react";
import { Button } from "react-bootstrap";
//need to verify this accomplishes what I'm after for mongoose
import API from "../../utils/api";
// import axios from "axios";

//on page load, get the clockCounter from the database
//if 0, then when we click the button, use post route
//useEffect hook

//if >0, use put route

const handleSubmitSurvey = async () => {
  try {
    // Submit the survey.
    const clockInOne = Date.now();
    //result is the response.json we're getting back from the apiRoutes.js create route
    //come back to this later
    const result = await API.createSurvey({ clockInOne });
    console.log(result);
    return result.data._id;
  } catch (err) {
    // Handle error responses from the API
    if (err.response && err.response.data) {
      console.log(err.response.data);
    } else {
      console.log(err);
    }
  }
};

const handleUpdateSurvey = async (id, updateTime) => {
  try {
    // Update the survey.
    await API.updateSurvey(id, updateTime);
  } catch (err) {
    // Handle error responses from the API
    if (err.response && err.response.data) {
      console.log(err.response.data);
    } else {
      console.log(err);
    }
  }
};

export default function InAndOut() {
  //set state on page load
  const [clockCounter, setclockCounter] = useState(0);
  const [id, setId] = useState("");

  //work on this later to handle refresh
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios("http://localhost:3001/surveys");
  //     console.log(result.data);
  //     // setData(result.data);
  //   };
  // }, []);
  //need the function to do the following (initial poc)
  //take the active user's id and push the current time into survey collection

  return (
    <Button
      className="btn-warning text-success"
      variant="outline-info"
      style={{ width: "120px" }}
      onClick={() => {
        switch (clockCounter) {
          case 0:
            setclockCounter(1);
            //come back to this part later
            // const surveyId = await handleSubmitSurvey();
            // setId(surveyId);
            handleSubmitSurvey().then(surveyId => {
              console.log(surveyId);
              setId(surveyId);
              console.log("clockCounter on 1st click", clockCounter);
              console.log("id at 1st click", id);
            });
            break;
          case 1:
            setclockCounter(2);
            handleUpdateSurvey(id, { clockOutOne: Date.now() });
            console.log("clockCounter at 2nd click", clockCounter);
            console.log("id at 2nd click", id);

            break;
          case 2:
            setclockCounter(3);
            handleUpdateSurvey(id, { clockInTwo: Date.now() });
            console.log("clockCounter at 3rd click", clockCounter);
            console.log("id at 3rd click", id);

            break;
          case 3:
            setclockCounter(4);
            handleUpdateSurvey(id, { clockOutTwo: Date.now() });
            console.log("clockCounter at 4th click", clockCounter);
            console.log("id at 4th click", id);

            break;
          default:
            break;
        }
      }}
    >
      Clock In/Out
    </Button>
  );
}
