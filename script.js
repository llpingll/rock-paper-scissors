// Add eventlistener and execute playround on click
const btns = document.querySelectorAll("body button");
btns.forEach(btn => btn.addEventListener("click", (e) => {
    console.log(e.target.id);
    playRound(e.target.id, getComputerChoice());
}));

// Game logic
function getComputerChoice()
{
    const random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, pcSelection)
{
    if (playerSelection === pcSelection)
    {
        console.log("Round Draw!");
        return "draw";
    }
    else if (playerSelection === "rock" && pcSelection === "scissors")
    {
        console.log("Round won! Rock beats Scissors.");
        return "win";
    }
    else if (playerSelection === "rock" && pcSelection === "paper")
    {
        console.log("Round lost! Paper beats Rock.");
        return "lose";
    }
    else if (playerSelection === "paper" && pcSelection === "scissors")
    {
        console.log("Round lost! Scissors beats Paper.");
        return "lose";
    }
    else if (playerSelection === "paper" && pcSelection === "rock")
    {
        console.log("Round won! Paper beats Rock.");
        return "win";
    }
    else if (playerSelection === "scissors" && pcSelection === "paper")
    {
        console.log("Round won! Scissors beats Paper.");
        return "win";
    }
    else if (playerSelection === "scissors" && pcSelection === "rock")
    {
        console.log("Round lost! Rock beats Scissors.");
        return "lose";
    }
}

// function game(playRound())
// {
//     let pcScore = 0;
//     let playerScore = 0;

    

//     if (playerScore > pcScore)
//     {
//         return "You Win!";
//     }
//     else if (playerScore < pcScore)
//     {
//         return "You lose!";
//     }
//     else
//     {
//         return "Draw!";
//     }
// }

// console.log();