let playerScore = 0;
let computerScore = 0;
let playerWins = 0;
let computerWins = 0;
// let message = "";

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerHand = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
  return computerHand
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a Tie, You both picked ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "Nice! You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Nice! You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "Nice! You Win! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  }
}

function game() {
  for (let gameNumber = 1; gameNumber < 10; gameNumber++) {
    let i = 1;
    while (i <= 5) {
      let playerSelection = prompt("Rock, Paper or Scissors").toLowerCase().replace(/\s/g, "");
      if (playerSelection === "rocks") {
        playerSelection = "rock"
      } else if (playerSelection === "papers") {
        playerSelection = "paper"
      } else if (playerSelection === "scissor") {
        playerSelection = "scissors"
      }
      if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        computerSelection = computerPlay();
        console.log(`Round number ${i}`)
        console.log(`Computer selection is: ${computerSelection}`);
        console.log(`Player selection is: ${playerSelection} `)
        console.log(playRound(playerSelection, computerSelection));
        i++;
      } else {
        console.log("invalid input")
        alert("Wrong input!Pleae write rock, paper or scissors!")
      }
    }

    if (playerScore > computerScore) {
      console.log(`Game result: Player wins
    Player: ${playerScore}
    Computer: ${computerScore}`);
      playerWins++;
      console.log(`Player final score: ${playerWins}`)
    } else if (playerScore < computerScore) {
      console.log(`Game result: You lost
    Player: ${playerScore}
    Computer: ${computerScore}`);
      computerWins++;
      console.log(`Computer final score: ${computerWins}`)
    } else {
      console.log("Game result: Its draw!");
    }
    alert(`Game nr ${gameNumber} finished`)
    console.log(`Game nr ${gameNumber}
      Player: ${playerWins}
      Computer: ${computerWins}`)
  }

}
game();