let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}
function getHumanChoice() {
  return new Promise((resolve) => {
    const btn = document.querySelector("#rock");
    btn.addEventListener("click", () => {
      resolve("rock");
    });
    const btn2 = document.querySelector("#paper");
    btn2.addEventListener("click", () => {
      return resolve("paper");
    });
    const btn3 = document.querySelector("#scissor");
    btn3.addEventListener("click", () => {
      return resolve("scissors");
    });
  });
}
// getHumanChoice();
async function playRound(computerChoice) {
  //   humanChoice = humanChoice.toLowerCase();
  const humanChoice = await getHumanChoice();
  if (humanChoice == "rock" && computerChoice == "Rock") {
    console.log("Nobody wins :) Try Again");
  } else if (humanChoice == "paper" && computerChoice == "Paper") {
    console.log("Nobody wins :) Try Again");
  } else if (humanChoice == "scissors" && computerChoice == "Scissors") {
    console.log("Nobody wins :) Try Again");
  } else if (humanChoice == "paper" && computerChoice == "Rock") {
    console.log("You win! Paper beats rock");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "Scissors") {
    console.log("You lose! Scissors beats paper");
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "Paper") {
    console.log("You lose! Paper beats rock");
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "Scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "Paper") {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "Rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else {
    console.log("Only type Rock, Paper, or Scissors");
  }
  console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
  if(humanScore < 3 || computerScore < 3){
    if(humanScore == 3){
        console.log("YOU WIN!!!!");
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 3){
        console.log("YOU LOSE!! ;)");
        humanScore = 0;
        computerScore = 0;
    }
    playRound(getComputerChoice());
  }
}
playRound(getComputerChoice());
