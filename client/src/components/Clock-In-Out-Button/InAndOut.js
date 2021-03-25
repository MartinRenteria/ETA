import React from "react";
import { Button } from "react-bootstrap";
//need to verify this accomplishes what I'm after for mongoose
import api from "../../utils/api";

const clockInOne = Date.now();

const handleSubmitSurvey = async () => {
  //   e.preventDefault();

  // const email = emailRef.current.value;
  // const password = passwordRef.current.value;
  // const firstName = firstNameRef.current.value;
  // const lastName = lastNameRef.current.value;
  // const title = titleRef.current.value;

  try {
    // Submit the survey.
    console.log({ clockInOne });
    await api.submitSurvey({ clockInOne });
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
  //need the function to do the following (initial poc)
  //take the active user's id and push the current time into survey collection

  return (
    <Button
      className="btn-warning text-success"
      variant="outline-info"
      style={{ width: "120px" }}
      onClick={() => {
        handleSubmitSurvey(clockInOne);
      }}
    >
      Clock In/Out
    </Button>
  );
}
