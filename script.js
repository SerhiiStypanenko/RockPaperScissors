function getComputerChoice() {
    let choices_arr = ["rock", "paper", "scissors"];
    return computer_choice = choices_arr[Math.floor(Math.random()*3)];
}

let playerScore = 0;
let computerScore = 0;
let gameNumber = 1;
if(JSON.parse(localStorage.getItem('scoreboard')) != null){
    gameNumber = JSON.parse(localStorage.getItem('scoreboard'))[JSON.parse(localStorage.getItem('scoreboard')).length-1].gameNumber + 1;
}
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
    if(playerScore === 5 || computerScore === 5) showResult();   
    displayScore();
      
}


function displayScore() {
    document.querySelector("#playerScore").textContent = `You: ${playerScore}`;
    document.querySelector("#computerScore").textContent = `Computer: ${computerScore}`;
}
// localStorage.clear()
let scoreboard = JSON.parse(localStorage.getItem('scoreboard')?localStorage.getItem('scoreboard'):JSON.stringify([]));
function insertScoreboard() {
    scoreboard.push({gameNumber,playerScore, computerScore});
    localStorage.setItem('scoreboard', JSON.stringify(scoreboard));
    // console.log(JSON.parse(localStorage.getItem('scoreboard')));
    console.log(scoreboard);
    // loadScoreboard();
    const table = document.querySelector(".scoreboard table");
    const row = table.insertRow(-1);
    let table_gameNumber = row.insertCell(0);
    let table_playerScore = row.insertCell(1);
    let table_computerScore = row.insertCell(2);
    table_gameNumber.textContent = scoreboard[scoreboard.length-1].gameNumber;
    table_playerScore.textContent = scoreboard[scoreboard.length-1].playerScore;
    table_computerScore.textContent = scoreboard[scoreboard.length-1].computerScore;
    
}
window.addEventListener('load', ()=> {
    loadScoreboard();
})
function loadScoreboard(){
    const data = JSON.parse(localStorage.getItem('scoreboard'));
    if(data === null) return;
    // console.log(data);
    const table = document.querySelector(".scoreboard table");
    data.forEach(obj => {
        const row = table.insertRow(-1);
        let table_gameNumber = row.insertCell(0);
        let table_playerScore = row.insertCell(1);
        let table_computerScore = row.insertCell(2);
        table_gameNumber.textContent = obj['gameNumber'];
        table_playerScore.textContent = obj['playerScore'];
        table_computerScore.textContent = obj['computerScore'];
    })
}
function showResult() {
    insertScoreboard();
    gameResult.classList.add('show');
    if(playerScore == 5){
        gameResult.textContent = `You won the match! Your score is ${playerScore}, and Computer's score was ${computerScore}`;
    }else if (computerScore == 5) {
        gameResult.textContent = `Sorry. You lost. Your score is ${playerScore}, and Computer's score was ${computerScore}`;
    }
    playerScore = 0;
    computerScore = 0;
    gameNumber++;
    console.log(gameNumber);
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

