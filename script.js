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
