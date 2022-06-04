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

var correctGuess = false;
var guessesLeft = 10;
var wins = 0;
var losses = 0;

var keyGuess = "";
var alreadyGuessedLtrs = "";
var alreadyGuessedArray = [];
var underScoreFills = 0
var rdmWord;
var difWord;

document.onkeyup = function start(e) {
    guessesLeft = 10;
    chooseWord();
    alreadyGuessedLtrs = "";
    alreadyGuessedArray = [];
}

//selects list word at random and puts in array
function chooseWord() {
    rdmWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    difWord = new Word (rdmWord);
    difWord.splitWord();
}




//places word in the word-to-guess element
//guessWord.textContent = rdmWord.toLowerCase();