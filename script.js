// Scores
let pcScore = 0;
let playerScore = 0;



// Add eventlistener and execute playround on click
const btns = document.querySelectorAll(".selection div");
btns.forEach(btn => btn.addEventListener("click", (e) => {
    console.log(e.target.id);
    playRound(e.target.id, getComputerChoice());
}));

// Get nodes
const playerScoreNode = document.querySelector(".pScore");
const pcScoreNode = document.querySelector(".pcScore");
const roundResult = document.querySelector(".roundResult");
const resultDetail = document.querySelector(".resultDetail");
const pWeapon = document.querySelector(".pWeapon");
const pcWeapon = document.querySelector(".pcWeapon");



// Game logic
function getComputerChoice() {
    const random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)]
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function playRound(playerSelection, pcSelection) {
    // Win
    if ((playerSelection === "rock" && pcSelection === "scissors") ||
        (playerSelection === "paper" && pcSelection === "rock") ||
        (playerSelection === "scissors" && pcSelection === "paper")) {
        roundResult.textContent = "Round won!";
        resultDetail.textContent = `${capitalize(playerSelection)} beats ${capitalize(pcSelection)}!`;
        playerScoreNode.textContent = `Player: ${++playerScore}`;
        pcWeapon.textContent = document.getElementById(`${pcSelection}`).textContent;
        pWeapon.textContent = document.getElementById(`${playerSelection}`).textContent;
    }
    else if ((playerSelection === "rock" && pcSelection === "paper") ||
        (playerSelection === "paper" && pcSelection === "scissors") ||
        (playerSelection === "scissors" && pcSelection === "rock")) {
        roundResult.textContent = "Round lost!";
        resultDetail.textContent = `${capitalize(pcSelection)} beats ${capitalize(playerSelection)}!`;
        pcScoreNode.textContent = `Computer: ${++pcScore}`;
        pcWeapon.textContent = document.getElementById(`${pcSelection}`).textContent;
        pWeapon.textContent = document.getElementById(`${playerSelection}`).textContent;
    }
    else {
        roundResult.textContent = "It's a draw";
        resultDetail.textContent = "Try again";
        pcWeapon.textContent = "🎮";
        pWeapon.textContent = "🎮";
    }
}

console.log();