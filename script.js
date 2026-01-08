function getComputerChoice() {

    let num_choice = Math.random()
    if (num_choice >= 0 && num_choice <= (1 / 3)) {
        let comp_choice = 'Paper';
        console.log(comp_choice);
    } else if (num_choice > (1 / 3) && num_choice <= (2 / 3)) {
        let comp_choice = 'Rock';
        console.log(comp_choice);
    } else if (num_choice > (2 / 3) && num_choice <= (1)) {
        let comp_choice = 'Scissor';
        console.log(comp_choice);
    }
}
getComputerChoice();