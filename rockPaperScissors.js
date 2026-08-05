const score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

function pickComputerMove(){
const randomNumber= Math.random();
let computerMove = '';
let result = '';
if (randomNumber >= 0 && randomNumber < (1 / 3)){
computerMove ='rock';
} else if (randomNumber >=(1 / 3) && randomNumber < (2  / 3)){
computerMove ='paper';
} else if (randomNumber >= (2 / 3) && randomNumber<1){
computerMove ='scissors';
}
    
return computerMove;
}

function makeMove(playerMove){
let computerMove = pickComputerMove()
    
let result='';           
if (playerMove === 'rock'){
if (computerMove === 'rock'){
    result = 'Tie';
    score.Ties += 1; 
} else if (computerMove === 'paper'){
    result = "You lose";
    score.Losses += 1; 
}else if (computerMove === 'scissors'){
    result = "You win";
    score.Wins += 1;
}
}
    
else if (playerMove === 'paper'){
if (computerMove === 'paper'){
    result = 'Tie';
    score.Ties += 1; 
} else if (computerMove === 'scissors'){
    result = "You lose";
    score.Losses += 1; 
}else if (computerMove === 'rock'){
    result = "You win";
    score.Wins += 1;
}
}
    
else if (playerMove === 'scissors'){
if (computerMove === 'scissors'){
    result = 'Tie';
    score.Ties += 1; 
} else if (computerMove === 'rock'){
    result = "You lose";
    score.Losses += 1; 
}else if (computerMove === 'paper'){
    result = "You win";
    score.Wins += 1;
}
}
document.getElementById('displayResult').innerHTML = 
`You picked <img src="images/${playerMove}-emoji.png" class="result-icon"> 
and computer picked <img src="images/${computerMove}-emoji.png" class="result-icon"> -- ${result} \n `;
document.getElementById('displayScores').innerHTML=`Ties:${score.Ties} Losses:${score.Losses} Wins:${score.Wins}`;

}