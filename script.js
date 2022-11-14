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

function game()
{
    let pcScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        result = playRound(prompt("Rock, Paper or Scissors?").toLowerCase(), getComputerChoice());
        if (result === "lose")
        {
            pcScore++;
            console.log(`Score = (Player - ${playerScore}), (computer - ${pcScore})`);
        }
        else if (result === "win")
        {
            playerScore++;
            console.log(`Score = (Player - ${playerScore}), (computer - ${pcScore})`);
        }
        else
        {
            pcScore++;
            playerScore++;
            console.log(`Score = (Player - ${playerScore}), (computer - ${pcScore})`);
        }
    }

    if (playerScore > pcScore)
    {
        return "You Win!";
    }
    else if (playerScore < pcScore)
    {
        return "You lose!";
    }
    else
    {
        return "Draw!";
    }
}

console.log(game());