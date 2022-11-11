function getComputerChoice()
{
    const random = ["Rock", "Paper", "Scissors"];
    return random[Math.floor(Math.random() * 3)]
}

function singleRound(playerSelection, pcSelection)
{
    if (playerSelection === pcSelection)
    {
        return "Draw!";
    }
    else if (playerSelection === "rock" && pcSelection === "scissors")
    {
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "rock" && pcSelection === "paper")
    {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && pcSelection === "scissors")
    {
        return "Player lose! Scissors beats Paper";
    }
    else if (playerSelection === "paper" && pcSelection === "rock")
    {
        return "Player Win! Paper beats Rock";
    }
    else if (playerSelection === "scissors" && pcSelection === "paper")
    {
        return "Player win! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && pcSelection === "rock")
    {
        return "Player lose! Rock beats Scissors";
    }
}

const playerSelection = prompt("Rock Paper or Scissors?")
const pcSelection = getComputerChoice();