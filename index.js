// randomly return "rock", "paper" or "scissors"
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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors!";
        } else return "You lose! Rock is beaten by paper!";
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock!";
        } else return "You lose! Paper is beaten by scissors!";
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beat paper!";
        } else return "You lose! Scissors is beaten by rock!";
    }
}