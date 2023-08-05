function getComputerChoice() {
    let choices_arr = ["rock", "paper", "scissors"];
    return computer_choice = choices_arr[Math.floor(Math.random()*3)];
}

let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection ==="scissors" || 
        playerSelection === 'scissors' && computerSelection ==="paper" ||
        playerSelection === 'paper' && computerSelection ==="rock"
        ){
        playerScore++;
    }else{
        computerScore++ ;
    }
    console.log("PlayerScore: ", playerScore);
    console.log("ComputerScore: ", computerScore);
}

function getPlayerChoice() {
    const input = prompt('Please enter rock/paper or scissors');
    return input.toLowerCase();
}

function game() {
    
    while(playerScore < 5 && computerScore < 5) {
        let playerSelection = getPlayerChoice();
        let computer_choice = getComputerChoice();
        playRound(playerSelection, computer_choice);
    }
    if(playerScore == 5){
        alert(`You won the match! Your score is ${playerScore}, and Computer's score was ${computerScore}`);
    }else if (computerScore == 5) {
        alert(`Sorry. You lost`);
    }
    playerScore = 0;
    computerScore = 0;
}

