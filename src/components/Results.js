import React, {useState} from 'react';
import '../assets/css/Results.css';
import data from '../trivia.json';

function Results(props) {
   let rank = "0"
   let description = "1"
    if (props.score / data.length <= 1/3){
      rank ="Classic Idiot"
      description="Let's be real - you're not the sharpest crayon in the box. A burger short of a combo meal. In other words, the lights are on, but no one's home. You should probably just give up and not try again."
    } else if (props.score / data.length <= 2/3 && props.score / data.length > 1/3){
      rank = "Positively Average"
      description = "A wise man once said, 'To those whose talents are above mediocrity, the highest subjects may be announced. To those who are below mediocrity, the highest subjects may not be announced.' But we don't expect you to know what that means, since you're so darned AVERAGE."
    } else{
      rank = "Certified Genius"
      description = "Well done, Bro'sef, you're a pretty smart frood. Maybe you can teach your dumb-ass friends next time, they're not doing so hot."
        
    }
    
    

  return (
    <div className="results">
      <h2>{rank}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Results
