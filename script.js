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
        (humanChoice == options[0] && computerChoice == options[2]) ||
        (humanChoice == options[1] && computerChoice == options[0]) ||
        (humanChoice == options[2] && computerChoice == options[1])
    )
        return "human"

    else 
        return "computer"
    
}

function playRound(e) {
    let humanChoice = e.target.textContent
    let computerChoice = getComputerChoice()

    let outcome = determineWinner(humanChoice, computerChoice)

    if (outcome == "human") {
        humanScore = humanScore + 1
        return "You win this round!"
    }

    else if (outcome == "computer") {
        computerScore ++
        return "Computer wins this round"
    }

    else
        return "this round is a tie."

}

