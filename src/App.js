import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './trivia.json';
import Question from './components/Question';
import Submit from './components/Submit';
import Score from './components/Score';
import Answers from './components/Answers';


function App() {

  const [question, setQuestion] = useState(0)

  return <div>
    <Question
      question={data[question]}
    />
     <Answers/>
  <Submit/>
    <Score/>
  </div>;
}

export default App;
