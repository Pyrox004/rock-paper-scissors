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
        return "You win!"

    else 
        return "Computer Wins"
    
}
