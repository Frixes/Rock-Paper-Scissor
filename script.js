let myArray = ["rock", "paper", "scissor"];

let computerCount = 0;
let playerCount = 0;
let playerSelection;

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

function choice(playerChoice) {
    playerSelection = playerChoice;
    console.log("rock");
}

const rockBtn = document.getElementById("rockbtn");
const paperBtn = document.getElementById("paperbtn");
const scissorBtn = document.getElementById("scissorbtn");

rockBtn.addEventListener("click", () => choice("rock"));
paperBtn.addEventListener("click", () => choice("paper"));
scissorBtn.addEventListener("click", () => choice("scissor"));


