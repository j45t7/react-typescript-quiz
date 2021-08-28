import React, { useState } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { fetchQuizQuestions } from './API'
//Types
import { QuestionState, Difficulty } from './API'

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
const TOTAL_QUESTIONS = 10

const App = () =>  {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(questions)

  const startTriva = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
    //todo: error handling

  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      //users answer
      const answer = event.currentTarget.value;
      //check answer agains corect answet
      const correct = questions[number].correct_answer === answer;
      //add score
      if(correct) setScore(prev => prev + 1)
      //save answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {}

  return (
    <div>
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className='start' onClick={startTriva}>Start</button>
      ) : null
      }
      {!gameOver && <p className="score">Score:</p>}
      {loading && <p>Loading Questions...</p> }
      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={number+1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className='next' onClick={nextQuestion}>Next Question</button>
      ) : null }
    </div>
  );
}

export default App;