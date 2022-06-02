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
var remainGuesses = document.getElementById("remaining-guesses");
var nbrWins = document.getElementById("wins");
var nbrLosses = document.getElementById("losses");
var blanks = [];

var correct = 0;
var incorrect = 0;
var guessesLeft = 10;

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

/*
function letters(rdmWord) {
  var ltrArray = rdmWord.split("");
  var wordLength = ltrArray.length;
  
  for(var i = 0; i < wordLength; i++) {
    let wordNode = document.createElement("span");
    wordNode.setAttribute("class", "wordLtr");
    wordNode.setAttribute("id", i)
    let text = document.createTextNode("_");
    wordNode.appendChild(text);
    guessWord.appendChild(wordNode)    
  }
}
*/
/*
wordLtrs = rdmWord.split("");
blanks = wordLtrs.length;
for(var i = 0; i < blanks; i++) {
  blanksAndCorrect.push("_");
}
guessWord.textContent = " " + blanksAndCorrect.join(" ");
console.log(rdmWord);

if (wordLtrs.toString() == blanksAndCorrect.toString()) {

  MORE GOES HERE

}
*/
/*
function blind (rdmWord, wordLtrs) {
  var ltrList = rdmWord.split("");
  var ltrListResult = "";
  var unScore = "";
  for (var i = 0; i < wordLtrs.length; i++) unScore += "_";
  var index = 0;
  for (const i of ltrList) {
    if (i === wordLtrs)
      ltrList[index] = unScore;
      index++;
  }
  //for (const i of ltrList) {
  //  result += i + "";
  //}
  return ltrListResult;
}
*/
/*
function blind() {
  indWordLtrs = rdmWord.split("");
//  wordLength = indWordLtrs.length;

  for(var i = 0; i < indWordLtrs.length; i++) {
    if (indWordLtrs[i] === "-") {
      guessWord.textContent = "-";
    } else {
      guessWord.textContent = "_"
    }

//    var blanks = wordLength[i];
//    guessWord.textContent = blanks("_");
  }
}
*/


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
