const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3)
    return options[n]
}

function getHumanChoice() {
    let choice
    do {
        let input = prompt("Choose Rock, Paper, or Scissors")
        choice = input.toLowerCase().trim()
        if (options.includes(choice))
            return choice
        else
            console.log("Invalid choice. Please enter Rock, Paper, or Scissors.")
    }
    while (!options.includes(choice))
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

function playRound() {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    let outcome = determineWinner(humanChoice, computerChoice)

    if (outcome == "human") {
        humanScore = humanScore + 1
        return "You win this round!"
    }

    else if (outcome == "computer") {
        computerScore = computerScore + 1
        return "Computer wins this round"
    }

    else
        return "this round is a tie."

}

let humanScore = 0
let computerScore = 0
const WIN_TARGET = 3

function playGame() {
    console.log("First to " + WIN_TARGET + " wins!")
    while (humanScore < WIN_TARGET && computerScore < WIN_TARGET) {
        playRound()
        }

    if (humanScore > computerScore){ 
        console.log("🎉 You won the game!")
    }

    else{
        console.log("🤖 Computer won the game.")
    }

    console.log("Final Score — You: " + humanScore + " | Computer: " + computerScore)
}


