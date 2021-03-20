import React from 'react';
import { Button } from "react-bootstrap"


export default function App() {
	const questions = [
		{
			questionText: 'As an employee here how would you rate your mental health inside of work? ',
			answerOptions: [
				{ answerText: '1', },
				{ answerText: '2', },
				{ answerText: '3', },
				{ answerText: '4', },
				{ answerText: '5', },
			],
		},
		{
			questionText: 'Do you ever worry about the security of your job?',
			answerOptions: [
				{ answerText: '1', },
				{ answerText: '2', },
				{ answerText: '3', },
				{ answerText: '4', },
				{ answerText: '5', },
			],
		},
		{
			questionText: 'As an employee here how would you rate your mental health inside of work?',
			answerOptions: [
				{ answerText: '1', },
				{ answerText: '2', },
				{ answerText: '3', },
				{ answerText: '4', },
				{ answerText: '5', },
			],
		},
		{
			questionText: 'Do you feel valued as a team member?',
			answerOptions: [
				{ answerText: '1', },
				{ answerText: '2', },
				{ answerText: '3', },
				{ answerText: '4', },
				{ answerText: '5', },
			],
		},
		{
			questionText: 'Do you feel like we have a supportive culture here?',
			answerOptions: [
				{ answerText: '1', },
				{ answerText: '2', },
				{ answerText: '3', },
				{ answerText: '4', },
				{ answerText: '5', },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	
	const handleAnswerButtonClick = () => {
		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
	}

	return (
		<div className='app'>
			{/* figure out how to push results to back end */}
			{false ? (
				<div className='results'></div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Employee check-in</span>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions) => (
							<Button className="btn-warning text-success" onClick={handleAnswerButtonClick}>{answerOptions.answerText}</Button>
						))}
					</div>
				</>
			)}
		</div>
	);
}