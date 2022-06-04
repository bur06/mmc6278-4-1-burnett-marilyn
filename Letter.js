var Letter = function(character) {
	this.character = character.toLowerCase();
	this.ltrGuessCorrect = false;
	// gives guessed letter or underscore 
	this.showCharacter = function() {
		if (this.letterGuessedCorrectly) {
			console.log(this.character);
		}
		else {
			//console.log ("_");
		}

	}
}

module.exports = Letter