import React from 'react';

function Score(props) {
  return (
    <div className="score">
      <div className="left"></div>
      <div className="center">
        <p>Score: {props.score}</p>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Score;
