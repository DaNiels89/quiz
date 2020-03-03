import React from 'react'
import data from '../trivia.json'


function Answers() {
    return(
        <div>
        {data[0].answer}
        {data[0].fakeAnswer1}
        {data[0].fakeAnswer2}
        {data[0].fakeAnswer3}
        </div>
    )
}

export default Answers
