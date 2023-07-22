const userChoice = document.querySelector('#userChoice');
const computerChoice = document.querySelector('#computerChoice');
const winnerIs = document.querySelector('#winnerIs');


const choicebutton = document.querySelectorAll('.choicebutton');


let player;
let computer;
let result;


choicebutton.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computersGo(() => {
        userChoice.textContent = `Player: ${player}`;
        computerChoice.textContent = `Computer: ${computer}`;
        winnerIs.textContent = checkwinner();
    });
}));


function computersGo(callback) {
    const random = Math.floor(Math.random() * 3) + 1;


    switch (random) {
        case 1:
            computer = 'Rock';
            break;
        case 2:
            computer = 'Paper';
            break;
        case 3:
            computer = 'Scissors';
            break;
    }


    callback();
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

