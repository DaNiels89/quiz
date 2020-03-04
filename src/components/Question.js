import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import '../assets/css/Question.css';
import data from '../trivia.json';

export default function Question(props) {
  
  const { register, handleSubmit } = useForm();
  const [green, setGreen] = useState("")
  function onSubmit(res, e) {
    let labels = document.querySelectorAll('label');
    if (res.answer === ''){
      alert('please select an answer')
    } else if (res.answer === props.answer){
      [...labels].forEach(element => {
        if(element.innerText === props.answer){
          element.classList.add("onGreen")
          setTimeout(() => element.classList.remove("onGreen"), 2000)
        }
      })
      
      //props.scoreUp()
      setTimeout(() => props.next(true), 2000)
    }
    else {
      [...labels].forEach(element => {
        if(element.innerText === props.answer){
          element.classList.add("onGreen")
          setTimeout(() => element.classList.remove("onGreen"), 2000)
        }
      })

      setTimeout(() => props.next(false), 2000)
      // change css 
    }
  }
  return (
    <div>
      <h2>{props.question}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div>
            <input id="answer1" name="answer" type="radio" value={props.allAnswers[0]} ref={register} />
            <label className={'none'}>{props.allAnswers[0]}</label>
          </div>
          <div>
            <input id="answer2" name="answer" type="radio" value={props.allAnswers[1]} ref={register}/>
            <label className={'none'}>{props.allAnswers[1]}</label>
          </div>
          <div>
            <input id="answer3" name="answer" type="radio" value={props.allAnswers[2]} ref={register}/>
            <label className={'none'}>{props.allAnswers[2]}</label>
          </div>
          <div>
            <input id="answer4" name="answer" type="radio" value={props.allAnswers[3]} ref={register}/>
            <label className={'none'}>{props.allAnswers[3]}</label>
          </div>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
  );
}
