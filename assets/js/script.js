/* declaring of all variables used throughout */
const userChoice = document.querySelector("#userChoice");
const computerChoiceElement = document.querySelector("#computerChoice");
const winnerIs = document.querySelector("#winnerIs");
const playerScoreElement = document.querySelector("#userScore");
const computerScoreElement = document.querySelector("#computerScore");
const drawScoreElement = document.querySelector("#drawScore");
const choiceButton = document.querySelectorAll(".choice-button");

const startButton = document.getElementById("start-game");
const readRulesButton = document.getElementById("read-rules");
const whateverButton = document.getElementById("whatever");

const gameScreen = document.querySelector(".game-screen");
const startScreen = document.querySelector(".start-screen");

const modal = document.querySelector(".modal-overlay");

readRulesButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

modal.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target !== document.querySelector(".modal-container")) {
    modal.style.display = "none";
  }
});

startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
});

let player;
let computer;

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
/* For Each loop that runs through player and computer choice and calls on functions*/
choiceButton.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.id;
    computersGo((computerChoice) => {
      userChoice.textContent = `Player: ${player}`;
      computerChoiceElement.textContent = `Computer: ${computerChoice}`;
      winnerIs.textContent = checkWinner();
      updateScoreboard();
      if (playerScore === 3 || computerScore === 3) {
        reset();
      }
    });
  })
);

/** function for computer to choose a random choice */
function computersGo(callback) {
  const random = Math.floor(Math.random() * 3) + 1;
  let computerChoiceText;

  switch (random) {
    case 1:
      computerChoiceText = "Rock";
      break;
    case 2:
      computerChoiceText = "Paper";
      break;
    case 3:
      computerChoiceText = "Scissors";
      break;
  }

  computer = computerChoiceText;
  callback(computerChoiceText);
}
/** function that checks user choice and checks computer choice and compares */
function checkWinner() {
  if (player === computer) {
    drawScore++;
    return "Draw!";
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    playerScore++;
    return "You Win!";
  } else {
    computerScore++;
    return "You Lose!";
  }
}
/* function for uodating scoreboard and resetting when winner reaches 3*/
function updateScoreboard() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  drawScoreElement.textContent = drawScore;

  if (playerScore === 3) {
    winnerIs.textContent =
      "Congratulations! You win! Make a choice to play again";
  } else if (computerScore === 3) {
    winnerIs.textContent =
      "You've lost the game. Unlucky! Make a choice to play again";
  }
}
/* function to reset scores to zero */
function reset() {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
}
