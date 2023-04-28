let myArray = ["rock", "paper", "scissor"];

let computerCount = 0;
let playerCount = 0;
let playerSelection;
let computerSelection;

const rockBtn = document.getElementById("rockbtn");
const paperBtn = document.getElementById("paperbtn");
const scissorBtn = document.getElementById("scissorbtn");
const winMsg = document.getElementById("win-msg");
const playerImg = document.getElementById("player-img");
const compImg = document.getElementById("comp-img");
const playerScore = document.getElementById("player-scr");
const compScore = document.getElementById("comp-scr");
const modal = document.getElementById("mymodal");
const modalMsg = document.getElementById("modal-msg");
const playBtn = document.getElementById("play-btn");

function getComputerChoice(){
    return myArray[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        winMsg.innerHTML = "It's a tie!";
    } else if ((playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock")) {
        winMsg.innerHTML = "Player wins!";
        playerCount += 1;
    } else {
        winMsg.innerHTML = "Computer wins!";
        computerCount += 1;
    }
}

function changeImg(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        playerImg.src = "./Image/rock.png";
    } else if (playerSelection == "paper") {
        playerImg.src = "./Image/paper.png";
    } else if (playerSelection == "scissor") {
        playerImg.src = "./Image/scissor.png";
    }

    if (computerSelection == "rock") {
        compImg.src = "./Image/rock.png";
    } else if (computerSelection == "paper") {
        compImg.src = "./Image/paper.png";
    } else if (computerSelection == "scissor") {
        compImg.src = "./Image/scissor.png";
    }
}

function choice(playerChoice) {
    playerSelection = playerChoice;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    changeImg(playerSelection, computerSelection);
    playerScore.innerHTML = `player Score : ${playerCount}`;
    compScore.innerHTML = `computer Score : ${computerCount}`;

    if (playerCount === 5) {
        modal.style.display = "block";
        modalMsg.innerHTML = "You Won";
    } else if (computerCount === 5) {
        modal.style.display = "block";
        modalMsg.innerHTML = "You Lost";
    }
}

function reset() {
    playerCount = 0;
    computerCount = 0;
    playerScore.innerHTML = `player Score : ${playerCount}`;
    compScore.innerHTML = `computer Score : ${computerCount}`;
    winMsg.innerHTML = "first to score 5 wins";
    playerImg.src = "./Image/question.png";
    compImg.src = "./Image/question.png";
    modal.style.display = "none";
}

rockBtn.addEventListener("click", () => choice("rock"));
paperBtn.addEventListener("click", () => choice("paper"));
scissorBtn.addEventListener("click", () => choice("scissor"));
playBtn.addEventListener("click", reset);

