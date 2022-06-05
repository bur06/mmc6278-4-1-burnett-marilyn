var Word = requires("./Word.js");

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

var userGuessCorrect = false;
var guessesLeft = 10;
var wins = 0;
var losses = 0;

var userGuess = "";
var alreadyGuessedList = "";
var alreadyGuessedArray = [];
var slotsFilledIn;
var randomWord;
var someWord;

document.onkeyup = function start(e) {
    guessesLeft = 10;
    chooseRandomWord();
    alreadyGuessedList = "";
    alreadyGuessedArray = [];
    slotsFilledIn = 0;
}

function chooseRandomWord() {
    randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    
    someWord = new Word (randomWord);
    //splits word and generate letters
    someWord.splitWord();
    someWord.generateLetters();
    guessLetter();
    }
    
    function guessLetter(){
        if (slotsFilledIn < someWord.letters.length || guessesLeft > 0) {
        //Check if value is a letter
    //    function value() {
    //        if(isLetter(value)){
    //          return true;
    //        } 
    //        else {
    //          return false;
    //        }
    //      }
    //  }
    //.then(function(guess) {
        guess.letter.toLowerCase();
        }
        //Assume correct guess to be false at this point.
        userGuessCorrect = false;
        //was letter was already guessed 
        if (alreadyGuessedArray.indexOf(guess.letter.toLowerCase()) > -1) {
            guessLetter();
        }
    
        else if (alreadyGuessedArray.indexOf(guess.letter.toLowerCase()) === -1) {
            //goes with already guessed letters
            alreadyGuessedList = alreadyGuessedList.concat(" " + guess.letter.toLowerCase());
            alreadyGuessedArray.push(guess.letter.toLowerCase());
            //Shows letters already guessed
            incorrectLtrs.textContent = alreadyGuessedList, {padding: 1};
     
            //matches letters in word
            for (i = 0; i < someWord.letters.length; i++) {
                if (guess.letter.toLowerCase() === someWord.letters[i].character && someWord.letters[i].letterGuessedCorrectly === false) {
                    //Set letterGuessedCorrectly property for that letter equal to true.
                    someWord.letters[i].letterGuessedCorrectly === true;
                    //Set userGuessedCorrectly to true.
                    userGuessedCorrectly = true;
                    someWord.underscores[i] = guess.letter.toLowerCase();
                    // someWord.underscores.join("");
                    // console.log(someWord.underscores);
                    //Increment the number of slots/underscores filled in with letters by 1.
                    slotsFilledIn++
                    //console.log("Number of slots remaining " + slotsFilledIn);
                }
            }
            someWord.splitWord();
            someWord.generateLetters();
    
            //If user guessed correct
            if (userGuessedCorrectly) {
                checkIfUserWon();
            }
    
            else {
                //Decrease number of guesses remaining
                guessesLeft--;
                checkIfUserWon();
            }
        }
    };
    
    function checkIfUserWon() {
        if (guessesRemaining === 0) {
            //Increment loss counter by 1.
            losses++;
            //Display wins and losses totals.
            nbrWins.textContent = (wins);
            nbrLosses.textContent = (losses);
            
            start();
        }
    
        else if (slotsFilledIn === someWord.letters.length) {
            //Increment win counter by 1.
            wins++;
            nbrWins.textContent = (wins);
            nbrLosses.textContent = (losses);
            
            start();
        }
    
        else {
            //keep running if no win/loss
            guessLetter("");
        }
    
    }