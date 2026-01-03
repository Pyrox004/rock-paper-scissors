const options = ["rock", "paper", "scissors"]
let computerScore = 0
let playerScore = 0
let playerScoreDisplay = document.querySelector(".player-score")
let computerScoreDisplay = document.querySelector(".computer-score")

playerScoreDisplay.textContent = `${playerScore}`
computerScoreDisplay.textContent = `${computerScore}`

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3)
    return options[n]
}

function getHumanChoice(e) {
    if (e.target.id == "rock") {
        return options[0]
    } else if (e.target.id == "paper") {
        return options[1]
    } else if (e.target.id == "scissors") {
        return options[2]
    } else {
        return undefined
    }
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
        humanScore ++
        return alert("You win this round!")
    }

    else if (outcome == "computer") {
        computerScore ++
        return alert("Computer wins this round")
    }

    else
        return alert("this round is a tie.")

}

