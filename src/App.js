import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './trivia.json';
import Question from './components/Question';
import Score from './components/Score';
import Progress from './components/Progress';
import Results from './components/Results';

function App() {

  const [question, setQuestion] = useState(0)
  const [score,setScore] = useState(0);

  let shuffled = data[question].allAnswers.sort(() => Math.random() - 0.5)

  function nextQuestion () {
    setQuestion(question + 1)
  }

  function scoreUp () {
    setScore(score + 1)
  }

  return <div className='container'>
  <Progress question={data[question].id} length={data.length}/>
    <Question
      question={data[question].question} answer={data[question].answer} allAnswers={shuffled} next={() => {nextQuestion()}} scoreUp={() => {scoreUp()}}
    />
    <Score score={score}/>
    <Results score={score} />
  </div>;
 
}

export default App;
