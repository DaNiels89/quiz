import React, { useState } from 'react';
import data from '../trivia.json';
import Question from './Question';
import Score from './Score';
import Progress from './Progress';
import Results from './Results';

const answers = data.map(
  (q) => q.allAnswers.sort(() => Math.random() - 0.5)
)

function Quiz() {
  const [question, setQuestion] = useState(0)
  const [score,setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  // let shuffled = data[question].allAnswers.sort(() => Math.random() - 0.5)

  function nextQuestion (rightAnswer) {
    if (rightAnswer){
      scoreUp()
    }
   if (question == (data.length - 1)) {
     setQuizEnd(true)
   } else {
     setQuestion(question + 1)
   } 
  }

  function scoreUp() {
    setScore(score + 1);
  }
  if (quizEnd) {
       return (
         <div>
       <Score score={score} length={data.length}/>
       <Results score={score}/> 
       </div>)
     } else {
     return (
     <div className='container'>
    <Progress question={data[question].id} length={data.length}/>
 <Question
      question={data[question].question} answer={data[question].answer} allAnswers={answers[question]} next={(x) => {nextQuestion(x)}} scoreUp={() => {scoreUp()}}
    />
    
  </div>
     )}
}

export default Quiz;
