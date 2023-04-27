let myArray = ["rock", "paper", "scissor"];


let computerCount = 0;
let playerCount = 0;

function getComputerChoice(){
    return myArray[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
    } else if ((playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock")) {
        playerCount += 1;
    } else {
        computerCount += 1;
    }
}

function game(){
    let run = true;
    while (run) {
        let playerSelection = prompt("Rock, Paper, or Scissor");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
        if (computerCount == 3) {
            return "Bot win"
        }

        if (playerCount == 3) {
            return "Player win"
        }
    }
}


console.log(game());

