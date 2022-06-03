debugger
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

var blanks = [];
var guessedLtrs = [];
var correct = 0;
var incorrect = 0;

//select list word at random
var rdmWord = words[Math.floor(Math.random() * words.length)];

//place this word in the word-to-guess element
guessWord.textContent = rdmWord.toLowerCase();

//replace the word letters with underscores
for(var i = 0; i < rdmWord.length; i++) {
  if (rdmWord.charAt(i) !== " ") {
    blanks.push("_");
  }
}
guessWord.textContent = blanks.join("");

//display 10 remaining quesses in remaining-quesses element
remGuesses.textContent = "10";

//when key pressed ck if ltr is in the word
document.onkeyup = function(e) {
  var key = e.key.toLowerCase();
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  if (letters.includes(key) === false) || (guessedLtrs.includes(key.toLowerCase())) {
    return null
  } else {
    guessedLtrs.push(key.toLowerCase());
    incorrectLtrs.textContent = guessedLtrs.join(" ");
    var rightGuess = false;
    for (var i = 0; i < rdmWord.length; i++) {
      if (key === rdmWord.charAt(i)) {
        blanks.splice(i, 1, key);
        rightGuess = true;
        guessWord.textContent = blanks.join(" ");
      }
      if (!blanks.includes("_")) {
        correct++;
        nbrWins.textContent = correct;
        function(e);
      }
    }
  }
}

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
