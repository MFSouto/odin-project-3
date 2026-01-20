function getComputerChoice() {

    let comp_choice;
    let num_choice = Math.random()
    if (num_choice >= 0 && num_choice <= (1 / 3)) {
        comp_choice = 'paper';
    } else if (num_choice > (1 / 3) && num_choice <= (2 / 3)) {
        comp_choice = 'rock';
    } else if (num_choice > (2 / 3) && num_choice <= (1)) {
        comp_choice = 'scissors';
    }
    return comp_choice;
}

let comp_score = 0;
let human_score = 0;
let human_choice;

function playRound(human_choice, comp_choice) {

    let result;

    if (human_choice == "rock" && comp_choice == "scissors") {
        human_score++;
        result = (`You win! Rock beats Scissors! Player score is ${human_score} and computer score is ${comp_score}`);
    } else if (human_choice == "paper" && comp_choice == "rock") {
        human_score++;
        result = (`You win! Paper beats Rock! Player score is ${human_score} and computer score is ${comp_score}`);
    } else if (human_choice == "scissors" && comp_choice == "paper") {
        human_score++;
        result = (`You win! Scissors beats Paper! Player score is ${human_score} and computer score is ${comp_score}`);
    } else if (comp_choice == "paper" && human_choice == "rock") {
        comp_score++;
        result = (`You lose! Paper beats Rock! Player score is ${human_score} and computer score is ${comp_score}`);
    } else if (comp_choice == "scissors" && human_choice == "paper") {
        comp_score++;
        result = (`You lose! Scissors beats Paper! Player score is ${human_score} and computer score is ${comp_score}`);
    } else if (comp_choice == "rock" && human_choice == "scissors") {
        comp_score++;
        result = (`You lose! Rock beats Scissors! Player score is ${human_score} and computer score is ${comp_score}`);
    } else {
        result = ("It's a Tie!");
    }
    return result;
}


const container = document.querySelector("#game");

const playerRock = document.createElement("button");
const playerPaper = document.createElement("button");
const playerScissors = document.createElement("button");

playerRock.textContent = "Rock";
playerPaper.textContent = "Paper";
playerScissors.textContent = "Scissors";

container.appendChild(playerRock);
container.appendChild(playerPaper);
container.appendChild(playerScissors);

const results = document.querySelector("#results");

function addResult() {

    const roundResult = (playRound(humanChoice, getComputerChoice()));
    const listResults = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = roundResult;

    if (human_score === 5) {/*  */
        alert(`You win! Player score is ${human_score} and computer score is ${comp_score}!`);
        human_score = 0;
        comp_score = 0;
                listResults.appendChild(span);
        results.appendChild(listResults);
        results.replaceChildren();

    } else if (comp_score === 5) {
        alert(`You lose! Player score is ${human_score} and computer score is ${comp_score}!`);
        comp_score = 0;
        human_score = 0;
                listResults.appendChild(span);
        results.appendChild(listResults);
        results.replaceChildren();
    } else if (comp_score < 5 && human_score < 5) {
        listResults.appendChild(span);
        results.appendChild(listResults);

    }

}

playerRock.addEventListener("click", () => {
    humanChoice = "rock";
    addResult();
})
playerPaper.addEventListener("click", () => {
    humanChoice = "paper";
    addResult();
})
playerScissors.addEventListener("click", () => {
    humanChoice = "scissors";
    addResult();
})

