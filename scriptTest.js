const gameInput = ["rock", "paper", "scissor"];
const randomInput = Math.floor(Math.random() * gameInput.length);
let playerScore = 0;
let computerScore = 0;

const computerPlay = () =>
  gameInput[Math.floor(Math.random() * gameInput.length)];

function gameRound(playerSelection, computerSelection) {
  if ((playerSelection == "rock" && computerSelection) == "paper") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (computerSelection == "rock" && playerSelection == "scissor") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else if (computerSelection == "paper" && playerSelection == "scissor") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (computerSelection == "scissor" && playerSelection == "rock") {
    console.log("Round: Player Wins!");
    return (playerScore += 1);
  } else if (computerSelection == "scissor" && playerSelection == "paper") {
    console.log("Round: Computer Wins!");
    return (computerScore += 1);
  } else {
    console.log("Round Draw!");
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    playerSelection = prompt("Enter Your Choice").toLowerCase();
    computerSelection = computerPlay();
    console.log("Round number: " + i);
    gameRound(playerSelection, computerSelection);
    console.log("Player Selected: " + playerSelection);
    console.log("Computer Selected: " + computerSelection);
  }
  if (playerScore > computerScore) {
    console.log("Player Wins the game!");
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
  } else if (computerScore > playerScore) {
    console.log("Computer Wins the game!");
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
  } else {
    console.log("Game Draw!");
  }
}

game();
