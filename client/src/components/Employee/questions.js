import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Questions() {
  const questions = [
    {
      questionText:
        "As an employee here how would you rate your mental health inside of work TODAY? (with 1 being the worst and 5 being the best) ",
      answerOptions: [
        { answerText: "1" },
        { answerText: "2" },
        { answerText: "3" },
        { answerText: "4" },
        { answerText: "5" }
      ]
    },
    {
      questionText: "Do you ever worry about the security of your job? (with 1 being very worried and 5 not at all)",
      answerOptions: [
        { answerText: "1" },
        { answerText: "2" },
        { answerText: "3" },
        { answerText: "4" },
        { answerText: "5" }
      ]
    },
    {
      questionText:
        "As an employee here how would you rate your mental health outside of work TODAY? (with 1 being the worst and 5 being the best)",
      answerOptions: [
        { answerText: "1" },
        { answerText: "2" },
        { answerText: "3" },
        { answerText: "4" },
        { answerText: "5" }
      ]
    },
    {
      questionText: "Do you feel valued as a team member? (with 1 being the worst and 5 being the best)",
      answerOptions: [
        { answerText: "1" },
        { answerText: "2" },
        { answerText: "3" },
        { answerText: "4" },
        { answerText: "5" }
      ]
    },
    {
      questionText: "Do you feel like we have a supportive culture here? (with 1 being no support and 5 being very supported)",
      answerOptions: [
        { answerText: "1" },
        { answerText: "2" },
        { answerText: "3" },
        { answerText: "4" },
        { answerText: "5" }
      ]
    },
    {
      questionText: "How would you rate your overall mood when you are at work TODAY? (1 being the worst and 5 being the best)",
      answerOptions: [
        { answerText: "1" },
        { answerText: "2" },
        { answerText: "3" },
        { answerText: "4" },
        { answerText: "5" }
      ]
    },
    {
      questionText: "Do you feel like you can talk to someone or ask for help with mental or physical health issues at work? (with 1 being no comfort all and 5 very comfortable)",
      answerOptions: [
        { answerText: "1" },
        { answerText: "2" },
        { answerText: "3" },
        { answerText: "4" },
        { answerText: "5" }
      ]
    },
    {
      questionText: "How do you work when you are under pressure? (with 1 being very poorly and 5 being very well)",
      answerOptions: [
        { answerText: "1" },
        { answerText: "2" },
        { answerText: "3" },
        { answerText: "4" },
        { answerText: "5" }
      ]
    },
    {
      questionText: "Do you get along with your colleagues? (with 1 being not at all and 5 being very well)",
      answerOptions: [
        { answerText: "1" },
        { answerText: "2" },
        { answerText: "3" },
        { answerText: "4" },
        { answerText: "5" }
      ]
    },
    {
      questionText: "Do you feel like you are respected? (with 1 being no respect and 5 being very respected",
      answerOptions: [
        { answerText: "1" },
        { answerText: "2" },
        { answerText: "3" },
        { answerText: "4" },
        { answerText: "5" }
      ]
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    console.log(questions.answerOptions);
    console.log(this);
    console.log(currentQuestion);
    setCurrentQuestion(nextQuestion);
  };

  return (
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
            {questions[currentQuestion].answerOptions.map(answerOptions => (
              <Button
                className="btn-warning text-success"
                onClick={handleAnswerButtonClick}
              >
                {answerOptions.answerText}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
