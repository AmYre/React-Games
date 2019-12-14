import React, { Component } from 'react'
import GuessLetters from './GuessLetters'
import GuessWord from './GuessWord'
import './Hanged.css'


class Hanged extends Component {

    state = {
        wordLetters: ['A','N','T','I','C','O','N','S','T','I','T','U','T','I','O','N','N','E','L','L','E','M','E','N','T'],
        guessLetters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
		goodLetters: [],
		guesses: 0,
	}


    getStatus(letter) {

		const { goodLetters } = this.state
		
		return (goodLetters.includes(letter))  ? 'visible' :  'hidden' 
      
    }


    handleGuessClick = letter => {

        const { guesses, goodLetters, wordLetters } = this.state
        const newGuesses = guesses +1

        this.setState({ guesses: newGuesses })
        
        if (wordLetters.includes(letter)) {

            this.setState({ goodLetters: goodLetters + [letter] })
        }
 
    }

	render() {

		const { wordLetters, guessLetters, guesses, goodLetters } = this.state

		return (
		
			<div className="hanged">

				<div className="guesses">
					{guesses}
				</div>

				<div className="good-letters">
					{goodLetters}
				</div>

				<div className="word">
					{wordLetters.map( (letter, index) => (
						<GuessWord letter={letter} status={this.getStatus(letter)} index={index} />
					))}
				</div>

				<div className="guess">
					{guessLetters.map( (letter, index) => (
						<GuessLetters letter={letter} listenClick={this.handleGuessClick} />
					))}
				</div>

			</div>
			
		)
		
	}

}

export default Hanged