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
]

var guessWord = document.getElementById("word-to-guess");
var prevWord = document.getElementById("previous-word");
var incorrectLtrs = document.getElementById("incorrect-letters");
var remainGuesses = document.getElementById("remaining-guesses");
var nbrWins = document.getElementById("wins");
var nbrLosses = document.getElementById("losses");

var correct = 0;
var incorrect = 0;

//select list word at random
//place this word in the word-to-guess element
//replace the word letters with underscores
//display 10 remaining quesses in remaining-quesses element
//when key pressed ck if ltr is in the word
//if ltr included, use it to replace underscore in word-to-guess element
//if ltr NOT included, word-to-guess element remains unchanged
//incorrectly guessed ltr added to incorrect-letters element
//remaining guesses element should reflect one fewer remaining guess
//no changes if non-ltr key chosen or same key chosen is repeated
//count correct wins
//display nbr of wins in wins element
//OR display nubr of losses
//game automatically proceeds to next random-chosen word
//all other elements should be reset
//incorrect letters blank
//remaining guesses show 10
//previous-word element reads "mango"
