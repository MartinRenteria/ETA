import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import api from "../../utils/api";

const selectedAnswersArray = [];
// let answerAverage;
const avg = arr => {
  const sum = arr.reduce((acc, cur) => acc + cur);
  console.log("this is the sum", sum);
  const average = Math.round(sum / arr.length);
  console.log("inside average", average);
  return average;
};

const handleUpdateSurvey = async (id, surveyResponses) => {
  try {
    // Update the survey.
    await api.updateSurvey(id, surveyResponses);
  } catch (err) {
    // Handle error responses from the API
    if (err.response && err.response.data) {
      console.log(err.response.data);
    } else {
      console.log(err);
    }
  }
};

export default function Questions(props) {
  console.log("props", props);
  let answerAverage;
  const questions = [
    {
      questionText:
        "As an employee here how would you rate your mental health inside of work TODAY? (with 1 being the worst and 5 being the best) ",
      answerOptions: [
        { answerText: 1 },
        { answerText: 2 },
        { answerText: 3 },
        { answerText: 4 },
        { answerText: 5 }
      ]
    },
    {
      questionText:
        "Do you ever worry about the security of your job? (with 1 being very worried and 5 not at all)",
      answerOptions: [
        { answerText: 1 },
        { answerText: 2 },
        { answerText: 3 },
        { answerText: 4 },
        { answerText: 5 }
      ]
    },
    {
      questionText:
        "As an employee here how would you rate your mental health outside of work TODAY? (with 1 being the worst and 5 being the best)",
      answerOptions: [
        { answerText: 1 },
        { answerText: 2 },
        { answerText: 3 },
        { answerText: 4 },
        { answerText: 5 }
      ]
    },
    {
      questionText:
        "Do you feel valued as a team member? (with 1 being the worst and 5 being the best)",
      answerOptions: [
        { answerText: 1 },
        { answerText: 2 },
        { answerText: 3 },
        { answerText: 4 },
        { answerText: 5 }
      ]
    },
    {
      questionText:
        "Do you feel like we have a supportive culture here? (with 1 being no support and 5 being very supported)",
      answerOptions: [
        { answerText: 1 },
        { answerText: 2 },
        { answerText: 3 },
        { answerText: 4 },
        { answerText: 5 }
      ]
    },
    {
      questionText:
        "How would you rate your overall mood when you are at work TODAY? (1 being the worst and 5 being the best)",
      answerOptions: [
        { answerText: 1 },
        { answerText: 2 },
        { answerText: 3 },
        { answerText: 4 },
        { answerText: 5 }
      ]
    },
    {
      questionText:
        "Do you feel like you can talk to someone or ask for help with mental or physical health issues at work? (with 1 being no comfort all and 5 very comfortable)",
      answerOptions: [
        { answerText: 1 },
        { answerText: 2 },
        { answerText: 3 },
        { answerText: 4 },
        { answerText: 5 }
      ]
    },
    {
      questionText:
        "How do you work when you are under pressure? (with 1 being very poorly and 5 being very well)",
      answerOptions: [
        { answerText: 1 },
        { answerText: 2 },
        { answerText: 3 },
        { answerText: 4 },
        { answerText: 5 }
      ]
    },
    {
      questionText:
        "Do you get along with your colleagues? (with 1 being not at all and 5 being very well)",
      answerOptions: [
        { answerText: 1 },
        { answerText: 2 },
        { answerText: 3 },
        { answerText: 4 },
        { answerText: 5 }
      ]
    },
    {
      questionText: "End of questions",
      answerOptions: [
        { answerText: 1 },
        { answerText: 2 },
        { answerText: 3 },
        { answerText: 4 },
        { answerText: 5 }
      ]
    }
  ];
  //this is a counter to see which number we're on
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // const handleAnswerButtonClick = selectedAnswer => {
  const handleAnswerButtonClick = e => {
    const nextQuestion = currentQuestion + 1;

    console.log("currentQuestions:", currentQuestion);
    setCurrentQuestion(nextQuestion);
    console.log("the data-number", e.target.getAttribute("data-number"));
    const thisAnswerInteger = parseInt(e.target.getAttribute("data-number"));

    console.log(thisAnswerInteger);
    selectedAnswersArray.push(thisAnswerInteger);

    if (currentQuestion === questions.length - 2) {
      console.log(
        "this is avg outside the function",
        avg(selectedAnswersArray)
      );
      answerAverage = avg(selectedAnswersArray);
    }
    if (currentQuestion === questions.length - 2) {
      //can i import the id from inAndOut function?
      handleUpdateSurvey("605fd74e49017476d8c8e16c", {
        answerAverage: avg(selectedAnswersArray)
        //close the modal here
      });

      console.log("what Im putting in answerAverage", {
        answerAverage: answerAverage
      });
      
      alert("You have finished! You have ended your shift. Please logout when you are ready")
      window.location.href = "http://localhost:3000/Employee"

    }
  };
  console.log(questions);
  console.log(currentQuestion);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="app">
          {/* figure out how to push results to back end */}
          {false ? (
            <div className="results"></div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Employee check-in</span>
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(answerOption => (
                  <Button
                    className="btn-warning text-success"
                    data-number={answerOption.answerText}
                    onClick={handleAnswerButtonClick}
                  >
                    {answerOption.answerText}
                  </Button>
                ))}
              </div>
              <Button variant="outline-info btn-dark" onClick={props.onHide}>
                Close
              </Button>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
