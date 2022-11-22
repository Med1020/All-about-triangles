import React, { useState } from 'react';

function Quiz() {
	const questions = [
		{
			questionText: 'What is the third angle for the triangle where angle1 = 90° and angle2=60°',
			answerOptions: [
				{ answerText: '90°', isCorrect: false },
				{ answerText: '45°', isCorrect: false },
				{ answerText: '30°', isCorrect: true },
				{ answerText: '60°', isCorrect: false },
			],
		},
		{
			questionText: '25°, 25°, and 130° are the angles of which triangle?',
			answerOptions: [
				{ answerText: 'Acute angle Triangle', isCorrect: false },
				{ answerText: 'Obtuse angle triangle', isCorrect: true },
				{ answerText: 'Right angle triangle', isCorrect: false },
				{ answerText: 'Scalene Triangle', isCorrect: false },
			],
		},
		{
			questionText: '60°, 70°, and 50° are the angles of which triangle?',
			answerOptions: [
				{ answerText: 'Acute angle Triangle', isCorrect: true },
				{ answerText: 'Right angle triangle', isCorrect: false },
				{ answerText: 'Obtuse angle triangle', isCorrect: false },
				{ answerText: 'Isosceles Triangle', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following angles can form a right angled triangle?',
			answerOptions: [
				{ answerText: '120°, 30°, 30°', isCorrect: false },
				{ answerText: '50°, 60°, 70°', isCorrect: false },
				{ answerText: '60°, 60°, 60°', isCorrect: false },
				{ answerText: '90°, 45°, 45°', isCorrect: true },
			],
		},
		{
			questionText: '60°, 90°, and 30° are the angles of which triangle?',
			answerOptions: [
				{ answerText: 'Isosceles triangle', isCorrect: false },
				{ answerText: 'Equilateral triangle', isCorrect: false },
				{ answerText: 'Obtuse angle triangle', isCorrect: false },
				{ answerText: 'Scalene triangle', isCorrect: true },
			],
		},
	];

const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);


	const handleClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quiz page'>
			{showScore ? (
				<div className='score' >
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='questions'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='btn' onClick={() => handleClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz