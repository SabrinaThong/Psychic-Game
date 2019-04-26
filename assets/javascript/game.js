var letters = ["a", "b", "c", "d", "e", "f", "g", 
"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
"r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var lettersGuessed = [];

document.onkeyup = function(event) {
    var Guess = event.key;
    lettersGuessed.push(letters);
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice);


    if (Guess === computerChoice){
        wins++;
    }
    else {
        guesses--;
    }
    if( Guess === computerChoice){
        guesses.reset = guesses = 9;
    }
    if(guesses < 0 ){
        losses++
    }
    if (guesses < 0){
        guesses.reset = guesses = 9;
    }

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("lose").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
    document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + Guess;
}
