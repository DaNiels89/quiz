import React from 'react'


function Answers(props) {
    return(
        <div>
        {props.answer}
        {props.fakeAnswers.map(fake => {return fake})}
        </div>
    )
}

export default Answers
