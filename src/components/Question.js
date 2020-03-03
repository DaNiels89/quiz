import React from 'react';
import { useForm } from 'react-hook-form';
import '../assets/css/Question.css';
import data from '../trivia.json';

export default function Question(props) {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <h2>{props.question}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div>
            <input id="answer1" name="answer" type="radio" />
            <label>{props.answer}</label>
          </div>
          <div>
            <input id="answer2" name="answer" type="radio" />
            <label>Brussels</label>
          </div>
          <div>
            <input id="answer3" name="answer" type="radio" />
            <label>Amsterdam</label>
          </div>
          <div>
            <input id="answer4" name="answer" type="radio" />
            <label>Oslo</label>
          </div>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
  );
}
