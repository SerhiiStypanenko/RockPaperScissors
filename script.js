function getComputerChoice() {
    let choices_arr = ["rock", "paper", "scissors"];
    return computer_choice = choices_arr[Math.floor(Math.random()*3)];
}

let playerScore = 0;
let computerScore = 0;

// let btn_rock = document.querySelector("#rock")
// let btn_paper = document.querySelector("#paper")
// let btn_scissors = document.querySelector("#scissors")
// btn_rock.addEventListener('click', ()=> {
//     console.log('rock')
// })
const chooseOption = document.querySelectorAll(".chooseOption > img");
const choices = document.querySelector('.choices')
const gameResult = document.querySelector("#gameResult");

let selected_btn;
chooseOption.forEach(btn => {
    btn.addEventListener('click', ()=> {
        gameResult.classList.remove('show');
        selected_btn = btn.id;
        document.querySelector("#playerChoice").setAttribute('src', `/img/rock.svg`)
        document.querySelector("#computerChoice").setAttribute('src', `/img/rock.svg`)
        choices.classList.add('showAnim');
    })
});
choices.addEventListener('animationend', (e) => {
    const compChoice = getComputerChoice();
    choices.classList.remove('showAnim');
    console.log(e);
    showChoice(selected_btn, compChoice);
    playRound(selected_btn, compChoice);
})
function showChoice(playerChoice, compChoice){
    document.querySelector("#playerChoice").setAttribute('src', `/img/${playerChoice}.svg`)
    document.querySelector("#computerChoice").setAttribute('src', `/img/${compChoice}.svg`)
}

function playRound(playerSelection, computerSelection){
    // console.log(playerSelection)
    // console.log(computerSelection)
    if (playerSelection === 'rock' && computerSelection ==="scissors" || 
        playerSelection === 'scissors' && computerSelection ==="paper" ||
        playerSelection === 'paper' && computerSelection ==="rock"
        ){
        playerScore++;
    }else if (playerSelection === computerSelection){
        gameResult.textContent = "It's a tie";
        gameResult.classList.add('show');
        setTimeout(()=> {
            gameResult.classList.remove('show');
        }, 1500)
    }else {
        computerScore++;
    }
    // console.log("PlayerScore: ", playerScore);
    // console.log("ComputerScore: ", computerScore);
    displayScore();
    if(playerScore === 5 || computerScore === 5) showResult();   
      
}


function displayScore() {
    document.querySelector("#playerScore").textContent = `You: ${playerScore}`;
    document.querySelector("#computerScore").textContent = `Computer: ${computerScore}`;
}
function showResult() {
    gameResult.classList.add('show');
    if(playerScore == 5){
        gameResult.textContent = `You won the match! Your score is ${playerScore}, and Computer's score was ${computerScore}`;
    }else if (computerScore == 5) {
        gameResult.textContent = `Sorry. You lost. Your score is ${playerScore}, and Computer's score was ${computerScore}`;
    }
    playerScore = 0;
    computerScore = 0;
}

// function getPlayerChoice() {
//     const input = prompt('Please enter rock/paper or scissors');
//     return input.toLowerCase();
// }


// function game() {
    
//     while(playerScore < 5 && computerScore < 5) {
//         let playerSelection = getPlayerChoice();
//         let computer_choice = getComputerChoice();
//         playRound(playerSelection, computer_choice);
//     }
//     if(playerScore == 5){
//         alert(`You won the match! Your score is ${playerScore}, and Computer's score was ${computerScore}`);
//     }else if (computerScore == 5) {
//         alert(`Sorry. You lost`);
//     }
//     playerScore = 0;
//     computerScore = 0;
// }

