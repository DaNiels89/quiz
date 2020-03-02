import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from '../trivia.json';
import Question from './Question';
import Submit from './Submit';
import Score from './Score';
import Answer from './Answer';

function App() {
  return (
    <div>
      <Question />
      <Answer />
      <Submit />
      <Score />
    </div>
  );
}

export default App;
