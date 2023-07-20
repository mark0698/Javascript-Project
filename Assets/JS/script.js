const userChoice = document.querySelector ('#userChoice')
const computerChoice = document.querySelector ('#computerChoice')
const winnerIs = document.querySelector ('#winnerIs')

const choicebutton = document.querySelectorAll ('.choicebutton')

let User;
let Player;
let result;

choicebutton.forEach (button => button.addEventListener('click', () => {
    player = button.textContent;
    computersGo = ();
    userChoice.textContent = `Player: ${Player}`;
    computerChoice.textContent = `Computer: ${Computer}`;
    winnerIs.textContent = checkwinner()


}))

function computersGo (){
    const random = math.floor(math.random() *3 )+1;

    switch (random){
            case 1: 
        computer = 'btn btn--big btn--rock';
        break ; 
            case 2:
            computer = 'btn btn--big btn--paper'
        break ;
            case 3: 
        computer = 'btn btn--big btn--scissors'

    }
}