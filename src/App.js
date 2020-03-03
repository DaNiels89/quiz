import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './trivia.json';
import Question from './components/Question';
import Score from './components/Score';

function App() {
  return (
    <div>
      <Question
      // question={data[0].question}
      />
    </div>
  );
}

export default App;
