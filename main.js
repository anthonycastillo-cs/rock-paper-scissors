let choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(arr){
    let randomChoice = Math.floor(Math.random()*choices.length);
    return arr[randomChoice];
}
// console.log(getComputerChoice(choices));
function getHumanChoice(){
    return prompt("Choose Rock, Paper, or Scissors");

}
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == "rock" && computerChoice == "Rock"){
        console.log("Nobody wins :) Try Again");
    }
    else if(humanChoice == "paper" && computerChoice == "Paper"){
        console.log("Nobody wins :) Try Again");
    }
    else if(humanChoice == "scissors" && computerChoice == "Scissors"){
        console.log("Nobody wins :) Try Again");
    }
    else if(humanChoice == "paper" && computerChoice == "Rock"){
        console.log("You win! Paper beats rock" );
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "Scissors"){
        console.log("You lose! Scissors beats paper");
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "Paper"){
        console.log("You lose! Paper beats rock");
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "Scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "Paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "Rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else{
        console.log("Only type Rock, Paper, or Scissors");
    }
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}
playRound(getHumanChoice(), getComputerChoice(choices));
function playGame(){
    for(let i=0; i<4; i++){
        playRound(getHumanChoice(), getComputerChoice(choices));
    }
}
playGame();