import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './trivia.json';
import Question from './components/Question';
import Score from './components/Score';

function App() {

  const [question, setQuestion] = useState(0)

  return <div className='container'>
    <Question
      question={data[question].question} answer={data[question].answer} fakeAnswers={data[question].fakeAnswers}
    />
    <Score/>
  </div>;
 
}

export default App;
