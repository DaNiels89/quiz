import React from 'react'
import data from '../trivia.json'

function Question() {
    return(
        <div>
        {data[0].question}
        </div>
    )
}

export default Question
