import React from 'react'

const GuessLetters = ( {letter, listenClick} ) => 

    (
        <div className='guessLetter' onClick={ () => listenClick(letter)}>

            {letter}
            
        </div>
    )

export default GuessLetters