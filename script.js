const options = ["rock", "paper", "scissors"]
let computerScore = 0
let playerScore = 0

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3)
    return options[n]
}



function determineWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice)
        return "it's a tie"
    else if (
        (humanChoice == "rock" && computerChoice == options[2]) ||
        (humanChoice == "paper" && computerChoice == options[0]) ||
        (humanChoice == "scissors" && computerChoice == options[1])
    )
        return "human"

    else 
        return "computer"
    
}

function playRound(e) {
    let humanChoice = e.target.textContent.toLowerCase()
    let computerChoice = getComputerChoice()

    let outcome = determineWinner(humanChoice, computerChoice)

    if (outcome == "human") {
        humanScore = humanScore + 1
        return alert("You win this round!")
    }

    else if (outcome == "computer") {
        computerScore ++
        return alert("Computer wins this round")
    }

    else
        return alert("this round is a tie.")

}

