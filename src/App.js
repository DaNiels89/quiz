import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import data from './trivia.json';
import Question from './components/Question';
import Submit from './components/Submit';
import Score from './components/Score';
import Answer from './components/Answer';

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
