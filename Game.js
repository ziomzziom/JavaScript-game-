// Rock Paper Scissors

// Create a function to generate a random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Create a function to get user input
function getUserInput() {
  let userInput = prompt("Rock, Paper, or Scissors?");
  return userInput;
}

// Create a function to get computer input
function getComputerInput() {
  let computerInput = randomNumber(1, 3);
  if (computerInput === 1) {
    return "Rock";
  } else if (computerInput === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Create a function to determine the winner
function determineWinner(userInput, computerInput) {
  if (userInput === computerInput) {
    return "It's a tie!";
  } else if (userInput === "Rock" && computerInput === "Scissors") {
    return "You win!";
  } else if (userInput === "Paper" && computerInput === "Rock") {
    return "You win!";
  } else if (userInput === "Scissors" && computerInput === "Paper") {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Create a function to play the game
function playGame() {
  let userInput = getUserInput();
  let computerInput = getComputerInput();
  console.log("You chose: " + userInput);
  console.log("Computer chose: " + computerInput);
  console.log(determineWinner(userInput, computerInput));
}

// Start the game
playGame();
