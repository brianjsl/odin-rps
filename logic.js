function getComputerChoice(){
    let val = Math.floor(Math.random()*3);
    switch (val) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors";
    }
}

function capitalizeFirst(s) {
    return s.charAt(0).toUpperCase() + s.substring(1);
}

function playRound(playerSelection, computerSelection) {
    let win_s = "You Win!";
    let lose_s = "You Lose!";
    let gs = "";
    let s = "";

    playerSelection = capitalizeFirst(playerSelection.toLowerCase());
    computerSelection = capitalizeFirst(computerSelection.toLowerCase());

    if (playerSelection === computerSelection) {
        gs = "draw";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        gs = "win";
    } else {
        gs = "loss";
    }

    if (gs === "win") {
        s = `${win_s} ${playerSelection} beats ${computerSelection}.`;
    } else if (gs === "loss") {
        s = `${lose_s} ${computerSelection} beats ${playerSelection}.`;
    } else {
        s = `Draw! You both did ${playerSelection}`;
    }

    return [gs, s];
}

function game() {
    let games_won = 0;
    let games_lost = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let [gs, s] = playRound(playerSelection, getComputerChoice());
        console.log(s);
        if (gs === "win") {
            games_won += 1;
        } else if (gs === "loss") {
            games_lost += 1;
        }
    }

    if (games_won > games_lost) {
        console.log("You Win!");
    } else if (games_won < games_lost) {
        console.log("You Lost!");
    } else {
        console.log("Draw!");
    }
}

game();