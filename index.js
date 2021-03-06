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
var correctGuess = [];
var incorrectGuess = [];
var guessesLeft = 10;
var correct = 0;
var incorrect = 0;


//selects list word at random
var rdmWord = words[Math.floor(Math.random() * words.length)];

//places word in the word-to-guess element
guessWord.textContent = rdmWord.toLowerCase();


//replace the word letters with underscores
for (var i = 0; i < rdmWord.length; i++) {
  if (rdmWord.charAt(i) !== " ") {
    blanks.push("_");
  }
}
guessWord.textContent = blanks.join("");

//display 10 remaining quesses in remaining-quesses element
remGuesses.textContent = "10";

//when key pressed ck if ltr is in the word
document.onkeyup = function start(e) {
  var keyGuess = e.key.toLowerCase();
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  if ((letters.includes(keyGuess) === false) || (guessedLtrs.includes(keyGuess.toLowerCase()))) {
    return null;

  } else {
      //ltr pressed into lc & pushes to guessedLtrs array / replaces underscore
      guessedLtrs.push(keyGuess.toLowerCase());
      var rightGuess = true;
      incorrectLtrs.textContent = guessedLtrs.join(" ");
      for (var i = 0; i < rdmWord.length; i++) {
        if (keyGuess === rdmWord.charAt(i)) {
          blanks.splice(i, 1, keyGuess);
          rightGuess = false;
          guessWord.textContent = blanks.join("");
          rightGuess = correctGuess.join("");
          rightGuess != incorrectGuess.join("");
        }

        if (!blanks.includes("_")) {
          correct++;
          nbrWins.textContent = correct;
          prevWord.textContent = guessWord.innerText.toString();
          reset();

        } else if (blanks.includes("_") && guessesLeft == 0) {
          incorrect++;
          nbrLosses.textContent = incorrect;
          reset();
        }

      }

      //remaining guesses element should reflect one fewer remaining guess
      if (rightGuess) {
        guessesLeft--;
        remGuesses.textContent = guessesLeft;
      }

      if (guessesLeft === 0) {
        incorrect++;
        nbrLosses.textContent = incorrect;
        reset();
      }
    }
  
    function reset() {
      blanks = [];
      guessedLtrs = [];
      guessesLeft = 10;
      guessWord = "";
      incorrectLtrs = "";
      remGuesses = "";
      rdmWord = "words[Math.floor(Math.random() * words.length)]";
    }
} 
