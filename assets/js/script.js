const userChoice = document.querySelector('#userChoice');
const computerChoiceElement = document.querySelector('#computerChoice');
const winnerIs = document.querySelector('#winnerIs');
const playerScoreElement = document.querySelector('#user');
const computerScoreElement = document.querySelector('#computer');
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
        return "Draw!";
    } else if (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')
    ) {
        return 'You Win!';
    } else {
        return 'You Lose!';
    }
    
}
function updateScoreboard() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    drawScoreElement.textContent = drawScore;
  }
  
