import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import '../assets/css/Question.css';
import data from '../trivia.json';

export default function Question(props) {

  const { register, handleSubmit } = useForm();
  const [green, setGreen] = useState("")
  function onSubmit(res, e) {
   
    if (res.answer === ''){
      alert('please select an answer')
    } else if (res.answer === props.answer){
      setGreen("answerInput")
      setTimeout(props.scoreUp(), 500)
      setTimeout(props.next(), 500)
      
    }
    else {
      setGreen("answerInput")
      setTimeout(props.next(), 500)
      
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
            <label className={green}>{props.allAnswers[0]}</label>
          </div>
          <div>
            <input id="answer2" name="answer" type="radio" value={props.allAnswers[1]} ref={register}/>
            <label className={green}>{props.allAnswers[1]}</label>
          </div>
          <div>
            <input id="answer3" name="answer" type="radio" value={props.allAnswers[2]} ref={register}/>
            <label className={green}>{props.allAnswers[2]}</label>
          </div>
          <div>
            <input id="answer4" name="answer" type="radio" value={props.allAnswers[3]} ref={register}/>
            <label className={green}>{props.allAnswers[3]}</label>
          </div>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
  );
}
