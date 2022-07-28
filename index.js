// randomly return "rock", "paper" or "scissors" as computer's choice

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

// plays a single round of game by taking in player's choice and computer's choice (from getComputerChoice function)

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors!";
        } else {
            return "You lose! Rock is beaten by paper!";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock!";
        } else {
            return "You lose! Paper is beaten by scissors!";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beat paper!";
        } else {
            return "You lose! Scissors is beaten by rock!";
        }
    }
}

// initialise scores

let playerScore = 0;
let computerScore = 0;

// plays 5 rounds with scorekeeping and reports a winner/loser at the end of best of 5

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your weapon between rock, paper and scissors");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Player chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        if (playRound(playerSelection, computerSelection) === "You win! Rock beats scissors!" || playRound(playerSelection, computerSelection) === "You win! Paper beats rock!" || playRound(playerSelection, computerSelection) === "You win! Scissors beat paper!") {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) === "You lose! Rock is beaten by paper!" || playRound(playerSelection, computerSelection) === "You lose! Paper is beaten by scissors!" || playRound(playerSelection, computerSelection) === "You lose! Scissors is beaten by rock!") {
            computerScore++;
        }
        console.log("Player score is: " + playerScore);
        console.log("Computer score is: " + computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You won!")
    } else if (player < computerScore) {
        console.log("You lost!")
    } else {
        console.log("Draw game!")
    }
}