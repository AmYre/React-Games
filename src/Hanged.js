import React, { Component } from 'react'
import GuessWord from './GuessWord'
import './Hanged.css'


class Hanged extends Component {

	state = {
        wordLetters: ['A','N','T','I','C','O','N','S','T','I','T','U','T','I','O','N','N','E','L','L','E','M','E','N','T'],
		goodLetters: [],
		guesses: 0,
		guessedLetter: [],
		winner : [],
	}

    getStatus(letter) {

		const { goodLetters } = this.state	
		return (goodLetters.includes(letter))  ? 'visible' :  'hidden' 
      
	}
	
	submittedFom(event) {

		event.preventDefault()
		
		const { guesses, goodLetters, wordLetters } = this.state
		const newGuesses = guesses +1

		this.setState({ guesses: newGuesses })
		this.setState({ guessedLetter: event.target.value.toUpperCase() })
        
        if (wordLetters.includes(event.target.value.toUpperCase())) {

            this.setState({ goodLetters: goodLetters + [event.target.value.toUpperCase()] })
        }

	}

	handleChange(event) {
		this.setState({ guessedLetter: event.target.value.toUpperCase() })
	}
	
	render() {

		const { wordLetters, guessedLetter, guesses } = this.state

		return (
		
			<div className="hanged">

				<div className="guesses">
					{guesses}
				</div>

				<div className="good-letters">
					{guessedLetter}
				</div>

				<div className="word">
					{wordLetters.map( (letter, index) => (
						<GuessWord letter={letter} status={this.getStatus(letter)} key={index} />
					))}
				</div>

				<form className="hanged-form" onInput={(event) => this.submittedFom(event)}>

					<input 
						onChange={(event) => this.handleChange(event)}
						value={guessedLetter}
						placeholder='Votre lettre ici'/>

				</form>

			</div>

		)
		
	}

}

export default Hanged