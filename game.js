let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("userscore");
const compScoreSpan = document.getElementById("compscore");
const resultDiv = document.getElementById("result");

const choices = ["rock", "paper", "scissor"];
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.id);
  });
});

function playGame(userChoice) {
  const compChoice = choices[Math.floor(Math.random() * choices.length)];
  const outcome = getResult(userChoice, compChoice);

  if (outcome === "win") {
    userScore++;
    resultDiv.textContent = `You win! ${userChoice} beats ${compChoice}. 🔥`;
  } else if (outcome === "lose") {
    compScore++;
    resultDiv.textContent = `You lose! ${compChoice} beats ${userChoice}. 💩`;
  } else {
    resultDiv.textContent = `It's a draw! ${userChoice} equals ${compChoice}. 🤝`;
  }

  updateScore();
}

function getResult(userChoice, compChoice) {
  if (userChoice === compChoice) return "draw";
  if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function updateScore() {
  userScoreSpan.textContent = userScore;
  compScoreSpan.textContent = compScore;
}
