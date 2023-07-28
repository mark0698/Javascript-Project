const userChoice = document.querySelector('#userChoice');
const computerChoiceElement = document.querySelector('#computerChoice');
const winnerIs = document.querySelector('#winnerIs');
const playerScoreElement = document.querySelector('#userScore');
const computerScoreElement = document.querySelector('#computerScore');
const drawScoreElement = document.querySelector('#drawScore');

const choicebutton = document.querySelectorAll('.choicebutton');

let player;
let computer;

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

choicebutton.forEach(button => button.addEventListener('click', () => {
    player = button.id;
    computersGo(computerChoice => {
        userChoice.textContent = `Player: ${player}`;
        computerChoiceElement.textContent = `Computer: ${computerChoice}`;
        winnerIs.textContent = checkwinner();
        updateScoreboard()
        if (playerScore === 3 || computerScore === 3) {
            reset ()
          }
    });
}));

function computersGo(callback) {
    const random = Math.floor(Math.random() * 3) + 1;
    let computerChoiceText;

    switch (random) {
        case 1:
            computerChoiceText = 'Rock';
            break;
        case 2:
            computerChoiceText = 'Paper';
            break;
        case 3:
            computerChoiceText = 'Scissors';
            break;
    }

    computer = computerChoiceText;
    callback(computerChoiceText);
}

function checkwinner() {
    if (player === computer) {
        drawScore++;
        return "Draw!";
    } else if (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')
    ) {
        playerScore++;
        return 'You Win!';
        
    } else {
        computerScore++;
        return 'You Lose!';

    }
    
}
function updateScoreboard() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    drawScoreElement.textContent = drawScore;

  if (playerScore === 3) {
    winnerIs.textContent = "Congratulations! You win!";
  } else if (computerScore === 3) {
    winnerIs.textContent = "You've lost the game. Unlucky!";
  }

}
  
  function reset (){
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
  }

