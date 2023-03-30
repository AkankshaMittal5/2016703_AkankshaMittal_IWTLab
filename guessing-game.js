// generate a random number between 1 and 1000
let numberToGuess = Math.floor(Math.random() * 1000) ;

// get the input field and button from the HTML document
let guessInput = document.getElementById("guessInput");
let guessButton = document.getElementById("guessButton");

// add an event listener to the button to handle guesses
guessButton.addEventListener("click", function() {
  // get the player's guess from the input field
  let guess = parseInt(guessInput.value);

  // check if the guess is correct
  if (guess === numberToGuess) {
    // if the guess is correct, display a message and generate a new random number
    alert("Congratulations. You guessed the number!");
    //numberToGuess = Math.floor(Math.random() * 1000) ;
  } else if (guess > numberToGuess) {
    // if the guess is too high, display a message and clear the input field
    alert("Too high. Try again.");
    guessInput.value = "";
  } else {
    // if the guess is too low, display a message and clear the input field
    alert("Too low. Try again.");
    guessInput.value = "";
  }
});
