import React, { useState } from "react";
import { Button } from "react-bootstrap";
import api from "../../utils/api";
import { useAuthenticatedUser } from "../../utils/auth";

const handleClockInOne = async userId => {
  try {
    // Submit the survey.
    const clockInOne = Date.now();
    //result is the response.json we're getting back from the apiRoutes.js create route
    //come back to this later
    const result = await api.createSurvey({ clockInOne, user: userId });
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

const handleUpdateTime = async (id, updateTime) => {
  try {
    // Update the survey.
    await api.updateTime(id, updateTime);
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

  //get the current user's info
  const user = useAuthenticatedUser();

  return (
    <Button
      className="btn-warning text-success"
      variant="outline-info"
      style={{ width: "120px" }}
      idTest={id}
      onClick={() => {
        switch (clockCounter) {
          case 0:
            setclockCounter(1);
            //come back to this part later
            handleClockInOne(user._id).then(surveyId => {
              console.log(surveyId);
              setId(surveyId);
              console.log("clockCounter on 1st click", clockCounter);
              console.log("id at 1st click", id);
            });
            break;

          case 1:
            setclockCounter(2);
            handleUpdateTime(id, { clockOutOne: Date.now() });
            console.log("clockCounter at 2nd click", clockCounter);
            console.log("id at 2nd click", id);
            break;

          case 2:
            setclockCounter(3);
            handleUpdateTime(id, { clockInTwo: Date.now() });
            console.log("clockCounter at 3rd click", clockCounter);
            console.log("id at 3rd click", id);
            break;

          case 3:
            setclockCounter(4);
            handleUpdateTime(id, { clockOutTwo: Date.now() });
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
