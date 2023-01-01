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

function playRound(playerSelection, computerSelection, results_div, scoreboard) {

    let num_tot = scoreboard.getAttribute("data-total");

    if (num_tot >= 5) {
        return;
    }

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
    
    let doc_s = document.createElement('p');
    doc_s.classList.add('gameString');
    doc_s.textContent = s;
    results_div.appendChild(doc_s);

    switch (gs) {
        case "win": 
            console.log(scoreboard.getAttribute("data-wins"));
            scoreboard.setAttribute("data-wins", +scoreboard.getAttribute("data-wins")+ 1);
            break;
        case "draw":
            console.log(scoreboard.getAttribute("data-draws"));
            scoreboard.setAttribute("data-draws", +scoreboard.getAttribute("data-draws")+ 1);
            break;
        case "loss":
            console.log(scoreboard.getAttribute("data-losses"));
            scoreboard.setAttribute("data-losses", +scoreboard.getAttribute("data-losses")+ 1);
            break;
    }

    scoreboard.setAttribute("data-total", +scoreboard.getAttribute("data-total")+ 1);

    num_wins = scoreboard.getAttribute("data-wins");
    num_draws = scoreboard.getAttribute("data-draws");
    num_losses = scoreboard.getAttribute("data-losses");
    num_tot = scoreboard.getAttribute("data-total");

    scoreboard.textContent = `Wins: ${num_wins}, \
    Draws: ${num_draws}, Losses: ${num_losses},\
    Total Games: ${num_tot}`;

    if (num_tot >= 5) {
        let final_s = document.createElement('p');

        if (num_wins > num_losses) {
            final_s.textContent = "You Win!";
        } else if (num_wins < num_losses) {
            final_s.textContent = "You Lose!";
        } else {
            final_s.textContent = "Draw!";
        }

        results_div.appendChild(final_s);  

        return "done";
    }

}

function game() {
    const buttons = document.querySelectorAll("button");
    const results_div = document.querySelector(".results");
    const scoreboard = document.querySelector(".scoreboard");

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            playRound(this.id, getComputerChoice(), results_div, scoreboard);
        }, );
    });


}

game();