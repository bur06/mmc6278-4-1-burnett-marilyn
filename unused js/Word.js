var Letter = requires("./Letter");

var Word = function(myWord) {
	//Takes word from word list.
	this.myWord = myWord;
	//letters array of chosen word
	this.letters = [];
	//underscores array needed
	this.underscores = [];
	//split to add letters to the this.letters array
	this.splitWord = function() {
		this.letters = this.myWord.split("");
		nbUscoresNeeded = this.letters.length;
		//pushes underscores to the this.underscores array
		for (var i=0; i < nbrUscoresNeeded; i++ ) {
		this.underscores.push("_ ");
		}
		//joins underscores pushed to this.underscores array w/space
		console.log(this.underscores.join(" "));
	}
	this.generateLtrs = function() {
		for (i = 0; i < this.letters.length; i++){
			this.letters[i] = new Letter (this.letters[i]);
			this.letters[i].showCharacter();
		}
	}
}

module.exports = Word;