import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './trivia.json';
import Question from './components/Question';
import Submit from './components/Submit';
import Score from './components/Score';
import Answers from './components/Answers';
// import Answer from './components/Answer';

function App() {
  return <div>
    <Question
      question={data[0].question}
    />
     <Answers/>
  <Submit/>
    <Score/>
  </div>;
}

export default App;
