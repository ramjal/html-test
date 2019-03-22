var randomNumber = Math.floor(Math.random() * 101);
var triesLeft = 10;
var prevGuess = document.getElementById("prevGuess");
var message1 = document.getElementById("message1");
var guessedNumber = document.getElementById("txtGuessedNumber");

// window load event (Can also add the load even on body tag)
window.onload = function () {
    //document.getElementById("submitSection").style.display = "";
    guessedNumber.focus();    
};

// 'Submit Guess' button clicked
function SubmitGuess() {
    triesLeft -= 1;
    if (triesLeft <= 0) {
        message1.textContent = "Game Over! You have tried 10 times!"
        message1.style.backgroundColor = "grey";
        document.getElementById("startNew").style.display = "";
        return;
    }

    var newNumber = guessedNumber.value;
    if (prevGuess.textContent === "") {
        prevGuess.textContent = "Previous Guesses: ";
    }

    prevGuess.textContent += " " + newNumber;

    if (newNumber == randomNumber) {
        message1.textContent = "Congratulations! The number was " + randomNumber;
        message1.style.backgroundColor = "green";
        document.getElementById("submitSection").style.display = "none";
        document.getElementById("startNew").style.display = "";
    } else if (newNumber > randomNumber) {
        message1.textContent = "value is big!"
        message1.style.backgroundColor = "red";
    } else if (newNumber < randomNumber) {
        message1.textContent = "value is small!"
        message1.style.backgroundColor = "blue";
    }

    guessedNumber.value = "";
    guessedNumber.focus();
}

// 'Start New' button is clicked
function StartNew() {
    document.location.reload();
}

// Execute a function when the user releases a key on the keyboard
guessedNumber.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        SubmitGuess();
    }
});
