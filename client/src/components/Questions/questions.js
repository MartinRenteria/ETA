import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const selectedAnswersArray = [];

export default function Questions(props) {
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
      questionText:
        "Do you feel like you are respected? (with 1 being no respect and 5 being very respected",
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
  const buttonEl = useRef([]);

  //create a state variable here to manage which answer we selected

  //this is a test to see what the values of the map are
  function testAnswerOptionsMap(e) {
    // console.log(buttonEl.current);
    // console.log(this);
    console.log(e.target.getAttribute("data-number"));
    // questions[currentQuestion].answerOptions.map(answerOptionTest => {
    //   return console.log(answerOptionTest.answerText);
    // });
  }

  // const handleAnswerButtonClick = selectedAnswer => {
  const handleAnswerButtonClick = e => {
    const nextQuestion = currentQuestion + 1;
    // console.log(questions.answerOption); coming back as undefined
    // console.log(this); coming back as undefined
    console.log(currentQuestion);
    setCurrentQuestion(nextQuestion);
    console.log(currentQuestion);
    console.log(e.target.getAttribute("data-number"));
    // console.log(selectedAnswer);
    // selectedAnswersArray.push(currentQuestion.this.value);
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
                    // ref={ref => buttonEl.current.push(ref)}
                    data-number={answerOption.answerText}
                    onClick={handleAnswerButtonClick}
                    // onClick={testAnswerOptionsMap}
                    // onClick={handleAnswerButtonClick(answerOption.answerText)}
                  >
                    {answerOption.answerText}
                  </Button>
                ))}
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
