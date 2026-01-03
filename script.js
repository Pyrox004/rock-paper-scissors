const options = ["rock", "paper", "scissors"]
let computerScore = 0
let playerScore = 0
let playerScoreDisplay = document.querySelector(".player-score")
let computerScoreDisplay = document.querySelector(".computer-score")
let update = document.querySelector(".update")

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

function winCondition() {
    if (playerScore == 5) {
        update.textContent = "You have won the game! Press restart if you want to play again."
    } else if (computerScore == 5) {
        update.textContent = "You have lost the game! Nice try. Press restart if you want to play again."
    } else undefined
}

function playRound(outcome) {
    if (outcome == "human") {
        playerScore ++
        playerScoreDisplay.textContent = `${playerScore}`
        update.textContent = "You win this round!"
    }

    else if (outcome == "computer") {
        computerScore ++
        computerScoreDisplay.textContent = `${computerScore}`
        update.textContent = "You lost this round :("
    }

    else
        update.textContent = "This round is a tie!"

}

const buttonContainer = document.querySelector(".buttons-container")

buttonContainer.addEventListener("click", (e) => {
    if (playerScore >= 5 || computerScore >= 5){
        update.textContent = "Game over. Press reset"
        return
    }

    let humanChoice = getHumanChoice(e)
    if (humanChoice === undefined) return

    let computerChoice = getComputerChoice()
    let outcome = determineWinner(humanChoice, computerChoice)

    playRound(outcome)

    winCondition()
})

const resetButton = document.querySelector(".reset")

resetButton.addEventListener("click", (e) => {
    playerScore = 0
    computerScore = 0

    playerScoreDisplay.textContent = `${playerScore}`
    computerScoreDisplay.textContent = `${computerScore}`

    update.textContent = "Game has restarted, BEGIN!"
})