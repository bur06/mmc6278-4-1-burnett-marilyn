var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
];

var guessWord = document.getElementById("word-to-guess");
var prevWord = document.getElementById("previous-word");
var incorrectLtrs = document.getElementById("incorrect-letters");
var remGuesses = document.getElementById("remaining-guesses");
var nbrWins = document.getElementById("wins");
var nbrLosses = document.getElementById("losses");

var guessCorrect = false;
var guessesLeft = 10;
var wins = 0;
var losses = 0;

var userGuess = "";
var alreadyGuessedList = "";
var alreadyGuessedArray = [];
var undScore = 0
var rdmWord;
var difWord;
var ltr;

document.onkeyup = function start(e) {
    guessesLeft = 10;
    chooseWord();
    alreadyGuessedList = "";
    alreadyGuessedArray = [];
}

//selects word & splits it
function chooseWord() {
    rdmWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    ltr = function(character) {
        this.character = character.toLowerCase();
        // stores ifletter has been guessed yet
        this.ltrGuessCorrect = false;
        // gives underlying character if the letter has been guessed OR underscore
        this.showCharacter = function() {
            if (this.ltrGuessCorrect) {
                console.log(this.character);
            }
            else {
                //console.log("_");
            }
    
        }
    }

    rdmWord = function(myWord) {
        this.myWord = myWord;
        //ltr array of random chosen word
        this.letters = [];
        //underscore array amt for chosen word 
        this.underscores = [];
        //add letters to the this.letters array.
        this.splitWord = function() {
            this.letters = this.myWord.split("");
            //underscores needed from this.letters array
            nbrUscoresNeeded = this.letters.length;
            //console.log(nbrUscoresNeeded);
            //push underscores to the this.underscores array & join
            for (var i = 0; i < nbrUscoresNeeded; i++ ) {
            this.underscores.push("_");
            }
            console.log(this.underscores.join(" "));
        }
//        this.generateLtrs = function() {
//            for (i = 0; i < this.letters.length; i++){
//                this.letters[i] = new Letter (this.letters[i]);
                //this.letters[i].letterGuessedCorrectly = true;
                //This line of code shows the super array of letter objects for debugging purposes.
                //console.log(this.letters[i]);
//                this.letters[i].showCharacter();
//            }
//        }
    }



}