import React from 'react'
import data from '../trivia.json'



function Question(props) {


    return(
        <div>
        <h1>{props.question}</h1>
        </div>
    )
}

export default Question