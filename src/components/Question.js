import React from 'react';
import { useForm } from 'react-hook-form';
import '../assets/css/Question.css';
import data from '../trivia.json';

export default function Question() {
  const { register, handleSubmit } = useForm();
  function onSubmit(res, e) {
    if (res.answer === '') {
      alert('Please select an answer');
    } else {
      // Todo tell that the answer is correct
    }
  }

  return (
    <div>
      <h2>What is the capital city of Sweden?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div>
            <input
              id="answer1"
              name="answer"
              value="Stockholm"
              type="radio"
              ref={register}
            />
            <label for="answer1">Stockholm</label>
          </div>
          <div>
            <input
              id="answer2"
              name="answer"
              value="Brussels"
              type="radio"
              ref={register}
            />
            <label for="answer2">Brussels</label>
          </div>
          <div>
            <input
              id="answer3"
              name="answer"
              value="Amsterdam"
              type="radio"
              ref={register}
            />
            <label for="answer3">Amsterdam</label>
          </div>
          <div>
            <input
              id="answer4"
              name="answer"
              value="Oslo"
              type="radio"
              ref={register}
            />
            <label for="answer4">Oslo</label>
          </div>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
  );
}
