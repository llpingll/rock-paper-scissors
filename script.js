// Scores
let pcScore = 0;
let playerScore = 0;

// Get nodes
const btns = document.querySelectorAll(".selection div");
const playerScoreNode = document.querySelector(".pScore");
const pcScoreNode = document.querySelector(".pcScore");
const roundResult = document.querySelector(".roundResult");
const resultDetail = document.querySelector(".resultDetail");
const pWeapon = document.querySelector(".pWeapon");
const pcWeapon = document.querySelector(".pcWeapon");
const modalContainer = document.querySelector(".modalContainer");
const announcement = document.querySelector(".announce");
const playAgain = document.querySelector(".playAgain");

// Events
btns.forEach(btn => btn.addEventListener("click", (e) => {
    // console.log(e.target.id);
    playRound(e.target.id, getComputerChoice());
}));

playAgain.addEventListener("click", () => {
    modalContainer.classList.remove("show");
    // Reset everything
    pcScore = 0;
    playerScore = 0;
    pcWeapon.textContent = "🎮";
    pWeapon.textContent = "🎮";
    roundResult.textContent = "Choose your weapon!";
    resultDetail.textContent = "First to score 5 points wins!";
    pcScoreNode.textContent = `Player: ${pcScore}`;
    playerScoreNode.textContent = `Computer: ${playerScore}`;
});


// Game logic
function getComputerChoice() {
    const random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)]
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function endGame() {
    if (playerScore === 5) {
        announcement.textContent = "You Win!";
        modalContainer.classList.add("show");
    }
    else if (pcScore === 5) {
        announcement.textContent = "You Lose!";
        modalContainer.classList.add("show");
    }
}

function playRound(playerSelection, pcSelection) {
    // Win condition
    if ((playerSelection === "rock" && pcSelection === "scissors") ||
        (playerSelection === "paper" && pcSelection === "rock") ||
        (playerSelection === "scissors" && pcSelection === "paper")) {
        roundResult.textContent = "Round won!";
        resultDetail.textContent = `${capitalize(playerSelection)} beats ${capitalize(pcSelection)}!`;
        playerScoreNode.textContent = `Player: ${++playerScore}`;
        pcWeapon.textContent = document.getElementById(`${pcSelection}`).textContent;
        pWeapon.textContent = document.getElementById(`${playerSelection}`).textContent;
    }
    // Lose condition
    else if ((playerSelection === "rock" && pcSelection === "paper") ||
        (playerSelection === "paper" && pcSelection === "scissors") ||
        (playerSelection === "scissors" && pcSelection === "rock")) {
        roundResult.textContent = "Round lost!";
        resultDetail.textContent = `${capitalize(pcSelection)} beats ${capitalize(playerSelection)}!`;
        pcScoreNode.textContent = `Computer: ${++pcScore}`;
        pcWeapon.textContent = document.getElementById(`${pcSelection}`).textContent;
        pWeapon.textContent = document.getElementById(`${playerSelection}`).textContent;
    }
    // Draw
    else {
        roundResult.textContent = "It's a draw";
        resultDetail.textContent = "Try again";
        pcWeapon.textContent = "🎮";
        pWeapon.textContent = "🎮";
    }
    // Check for end of game
    endGame();
}