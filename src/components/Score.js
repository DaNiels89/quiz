import React from 'react';

function Score(props) {
  return (
    <div className="score">
      <div className="center">
        <p>Score: {parseFloat(props.score/props.length * 100).toFixed() + "%"} </p>
      </div>
    </div>
  );
}

export default Score;
