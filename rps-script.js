function getComputerChoice(){
    randomMove= (math.floor(math.random()*3));
    return randomMove;
}

let playerSelection="";
let computerSelection=0;
let playerScore=0;
let computerScore=0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        playerSelection=button.id;
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    });
});

const result = document.getElementById('result');

function playRound(playerSelection, computerSelection) {
    if(playerSelection==="rock"){
        if (computerSelection===0){
            result.textContent="It's a Tie!";
            return computerScore;
        } else if (computerSelection===1){
            computerScore++;
            result.textContent="You Lose! Paper beats Rock";
            return computerScore;
        } else if(computerSelection===2){
            playerScore++;
            result.textContent="You Win! Rock beats Scissors";
            return playerScore;
        }
    } else if(playerSelection==="scissors"){
        if (computerSelection===2){
            result.textContent="It's a Tie!";
            return computerScore;
        } else if (computerSelection===0){
            computerScore++;
            result.textContent="You Lose! Rock beats Scissors";
            return computerScore;
        } else if(computerSelection===1){
            playerScore++;
            result.textContent="You Win! Scissors beats Paper";
            return playerScore;
        }
    } else if (playerSelection==="paper"){
        if (computerSelection===1){
            result.textContent="It's a Tie!";
            return computerScore;
        } else if (computerSelection===2){
            computerScore++;
            result.textContent="You Lose! Scissors beats Paper";
            return computerScore;
        } else if(computerSelection===0){
            playerScore++;
            result.textContent="You Win! Paper beats Rock";
            return playerScore;
        }
    }            
}
 