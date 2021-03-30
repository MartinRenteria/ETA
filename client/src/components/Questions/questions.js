import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import api from "../../utils/api";

const answerOptions = [
  {
    answerValue: 1,
    answerText: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-emoji-angry"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zm6.991-8.38a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5s-1-.672-1-1.5c0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1zm-6.552 0a.5.5 0 0 0-.448.894l1.009.504A1.94 1.94 0 0 0 5 6.5C5 7.328 5.448 8 6 8s1-.672 1-1.5c0-.247-.04-.48-.11-.686a.502.502 0 0 0-.166-.761l-2-1z" />
      </svg>
    )
  },
  {
    answerValue: 1,
    answerText: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-emoji-frown"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
      </svg>
    )
  },
  {
    answerValue: 1,
    answerText: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-emoji-expressionless"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
      </svg>
    )
  },
  {
    answerValue: 1,
    answerText: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-emoji-smile"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
      </svg>
    )
  },
  {
    answerValue: 1,
    answerText: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-emoji-laughing"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
      </svg>
    )
  }
];

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
      answerOptions: answerOptions
    },
    {
      questionText:
        "Do you ever worry about the security of your job? (with 1 being very worried and 5 not at all)",
      answerOptions: answerOptions
    },
    {
      questionText:
        "As an employee here how would you rate your mental health outside of work TODAY? (with 1 being the worst and 5 being the best)",
      answerOptions: answerOptions
    },
    {
      questionText:
        "Do you feel valued as a team member? (with 1 being the worst and 5 being the best)",
      answerOptions: answerOptions
    },
    {
      questionText:
        "Do you feel like we have a supportive culture here? (with 1 being no support and 5 being very supported)",
      answerOptions: answerOptions
    },
    {
      questionText:
        "How would you rate your overall mood when you are at work TODAY? (1 being the worst and 5 being the best)",
      answerOptions: answerOptions
    },
    {
      questionText:
        "Do you feel like you can talk to someone or ask for help with mental or physical health issues at work? (with 1 being no comfort all and 5 very comfortable)",
      answerOptions: answerOptions
    },
    {
      questionText:
        "How do you work when you are under pressure? (with 1 being very poorly and 5 being very well)",
      answerOptions: answerOptions
    },
    {
      questionText:
        "Do you get along with your colleagues? (with 1 being not at all and 5 being very well)",
      answerOptions: answerOptions
    },
    {
      questionText: "End of questions",
      answerOptions: answerOptions
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

      alert(
        "You have finished! You have ended your shift. Please logout when you are ready"
      );
      window.location.href = "http://localhost:3000/Employee";
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
                    data-number={answerOption.answerValue}
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
