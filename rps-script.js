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
        playRound();
        scoreCheck();
    });
});

const result = document.getElementById('result');
const score = document.getElementById('scoreboard');

function playRound() {
    if(playerSelection==="rock"){
        if (computerSelection===0){
            result.textContent="It's a Tie!";
            score.textContent=("Human " + playerScore + " - " + computerScore + " Computer");
            return [playerScore, computerScore];
        } else if (computerSelection===1){
            computerScore++;
            result.textContent="You Lose! Paper beats Rock";
            score.textContent=("Human " + playerScore + " - " + computerScore + " Computer");
            return [playerScore, computerScore];
        } else if(computerSelection===2){
            playerScore++;
            result.textContent="You Win! Rock beats Scissors";
            score.textContent=("Human " + playerScore + " - " + computerScore + " Computer");
            return [playerScore, computerScore];
        }
    } else if(playerSelection==="scissors"){
        if (computerSelection===2){
            result.textContent="It's a Tie!";
            score.textContent=("Human " + playerScore + " - " + computerScore + " Computer");
            return [playerScore, computerScore];
        } else if (computerSelection===0){
            computerScore++;
            result.textContent="You Lose! Rock beats Scissors";
            score.textContent=("Human " + playerScore + " - " + computerScore + " Computer");
            return [playerScore, computerScore];
        } else if(computerSelection===1){
            playerScore++;
            result.textContent="You Win! Scissors beats Paper";
            score.textContent=("Human " + playerScore + " - " + computerScore + " Computer");
            return [playerScore, computerScore];
        }
    } else if (playerSelection==="paper"){
        if (computerSelection===1){
            result.textContent="It's a Tie!";
            score.textContent=("Human " + playerScore + " - " + computerScore + " Computer");
            return [playerScore, computerScore];
        } else if (computerSelection===2){
            computerScore++;
            result.textContent="You Lose! Scissors beats Paper";
            score.textContent=("Human " + playerScore + " - " + computerScore + " Computer");
            return [playerScore, computerScore];
        } else if(computerSelection===0){
            playerScore++;
            result.textContent="You Win! Paper beats Rock";
            score.textContent=("Human " + playerScore + " - " + computerScore + " Computer");
            return [playerScore, computerScore];
        }
    }            
}

function scoreCheck() {
    if (playerScore==5){
        alert("Game Over! Human Wins");
        playerScore=0;
        computerScore=0;
        result.textContent="";
        score.textContent=("Human 0 - 0 Computer");
    } else if (computerScore==5){
        alert("Game Over! Computer Wins");
        playerScore=0;
        computerScore=0;
        result.textContent="";
        score.textContent=("Human 0 - 0 Computer");
    }

}