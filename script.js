function getComputerChoice() {

    let comp_choice;
    let num_choice = Math.random()
    if (num_choice >= 0 && num_choice <= (1 / 3)) {
        comp_choice = 'Paper';
    } else if (num_choice > (1 / 3) && num_choice <= (2 / 3)) {
        comp_choice = 'Rock';
    } else if (num_choice > (2 / 3) && num_choice <= (1)) {
        comp_choice = 'Scissors';
    }
    return comp_choice;
}

function getHumanChoice() {

    let human_choice = prompt("Please enter either 'Rock', 'Paper' or 'Scissors'");

    return human_choice;
}


let comp_score = 0;
let human_score = 0;


function playRound(human_choice,comp_choice) {

    let result;

    if (human_choice == "rock" && comp_choice == "scissors") {
        result = ("You win! Rock beats Scissors!");
        human_score++;
    } else if (human_choice == "paper" && comp_choice == "rock") {
        result = ("You win! Paper beats Rock!");
        human_score++;

    } else if (human_choice == "scissors" && comp_choice == "paper") {
        result = ("You win! Scissors beats Paper!");
        human_score++;

    } else if (comp_choice == "paper" && human_choice == "rock") {
        result = ("You lose! Paper beats Rock!");
        comp_score++;
    } else if (comp_choice == "scissors" && human_choice == "paper") {
        result = ("You lose! Scissors beats Paper!");
        comp_score++;

    } else if (comp_choice == "rock" && human_choice == "scissors") {
        result = ("You lose! Rock beats Scissors!");
        comp_score++;

    } else {
        result = ("It's a Tie!");
    }
    return result;
}

function playGame(rounds) {
    for (let i = 1; i <=rounds; i++) {
        let human_choice=getHumanChoice().toLowerCase();
        let comp_choice=getComputerChoice().toLowerCase();
        console.log(`The computer choice is ${comp_choice}`);
        console.log(`Your choice is ${human_choice}`);
        console.log(playRound(human_choice,comp_choice));
        console.log(`The computer score is: ${comp_score}` );
        console.log(`Your scores is: ${human_score}`);

    }
    console.log(`Final result: Player won ${human_score} rounds and computer won ${comp_score} rounds! `)
}


playGame(5);