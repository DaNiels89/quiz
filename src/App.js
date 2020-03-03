import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './trivia.json';
import Question from './components/Question';
import Submit from './components/Submit';
import Score from './components/Score';
import Answers from './components/Answers';


function App() {

  const [question, setQuestion] = useState(0)

  return <div className='container'>
    <Question
      question={data[question].question} answer={data[question].answer}
    />
     <Answers 
     answer={data[question].answer} fakeAnswers={data[question].fakeAnswers}
     />
  <Submit/>
    <Score/>
  </div>;
}

export default App;
