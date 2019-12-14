import React from 'react'

const GuessWord = ( {letter, status} ) => 

    (
        <div className={`wordLetter ${status}` }>

            {status === 'hidden' ? '_' : letter}

        </div>
    )

export default GuessWord