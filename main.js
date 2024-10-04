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
      return resolve("rock");
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

// const mainContainer = document.querySelector(".main-container");
const choiceMade = document.createElement("div");
choiceMade.classList.add("choice-item");
const scoreContainer = document.querySelector(".score-container");
const score = document.createElement("div");
scoreContainer.appendChild(choiceMade);
scoreContainer.appendChild(score);

async function playRound() {
  const humanChoice = await getHumanChoice();
  const compChoice = getComputerChoice();
  if (humanChoice == "rock" && compChoice == "Rock") {
    choiceMade.textContent = "Draw! Try Again";
  } else if (humanChoice == "paper" && compChoice == "Paper") {
    choiceMade.textContent = "Draw! Try Again";
  } else if (humanChoice == "scissors" && compChoice == "Scissors") {
    choiceMade.textContent = "Draw! Try Again";
  } else if (humanChoice == "paper" && compChoice == "Rock") {
    choiceMade.textContent = "You Win! Paper beats rock";
    humanScore++;
  } else if (humanChoice == "paper" && compChoice == "Scissors") {
    choiceMade.textContent = "You Lose! Scissors beats paper";
    computerScore++;
  } else if (humanChoice == "rock" && compChoice == "Paper") {
    choiceMade.textContent = "You Lose! Paper beats rock";
    computerScore++;
  } else if (humanChoice == "rock" && compChoice == "Scissors") {
    choiceMade.textContent = "You Win! Rock beats Scissors";
    humanScore++;
  } else if (humanChoice == "scissors" && compChoice == "Paper") {
    choiceMade.textContent = "You Win! Scissors beats Paper";
    humanScore++;
  } else if (humanChoice == "scissors" && compChoice == "Rock") {
    choiceMade.textContent = "You Lose! Rock beats Scissors";
    computerScore++;
  } else {
    choiceMade.textContent = "Only type Rock, Paper, or Scissors";
  }
  console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
  score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
  if (humanScore < 5 || computerScore < 5) {
    if (humanScore == 5) {
      score.textContent = "YOU WIN!!!!!";
      humanScore = 0;
      computerScore = 0;
    } else if (computerScore == 5) {
      score.textContent = "YOU LOSE! CAN'T BEAT CPU HUH 😂";
      humanScore = 0;
      computerScore = 0;
    }
    playRound();
  }
}

playRound();
