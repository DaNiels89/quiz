import React from 'react'
import data from '../trivia.json'


function Answer() {
    return(
        <div>
        {data[0].answer}
        </div>
    )
}

export default Answer
