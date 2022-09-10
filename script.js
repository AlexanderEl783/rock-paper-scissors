const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const result = document.querySelector('.result');

const yourChose = document.getElementById('your-chose');
const computerChose = document.getElementById('computer-chose');

const yourScore = document.getElementById('your-score');
const computerScore = document.getElementById('computer-score');

const reset = document.querySelector('.reset');


let yourCounter = 0;
let computerCounter = 0;

let weapons = ['Rock', 'Scissors', 'Paper']

function start() {
    yourChose.textContent = yourItem;
}

rockBtn.addEventListener('click', () => {
    yourChose.textContent = weapons[0];
    computerChose.textContent = weapons[randomWeapon()];
    calculate();
})

scissorsBtn.addEventListener('click', () => {
    yourChose.textContent = weapons[1];
    computerChose.textContent = weapons[randomWeapon()];
    calculate();
})

paperBtn.addEventListener('click', () => {
    yourChose.textContent = weapons[2];
    computerChose.textContent = weapons[randomWeapon()];
    calculate();
})

reset.addEventListener('click', () => {
    yourCounter = 0;
    computerCounter = 0;
    yourScore.textContent = yourCounter;
    computerScore.textContent = computerCounter;
    computerScore.style.color = 'black';
    yourScore.style.color = 'black';
    result.textContent = '';
    yourChose.textContent = '';
    computerChose.textContent = '';
})


function randomWeapon() {
    return Math.floor(Math.random() * weapons.length);
}

function calculate() {
    if (yourChose.textContent == weapons[0] &
        computerChose.textContent == weapons[0] ||
        yourChose.textContent == weapons[1] &
        computerChose.textContent == weapons[1] ||
        yourChose.textContent == weapons[2] &
        computerChose.textContent == weapons[2]) {
        result.textContent = 'Draw!';
        result.style.color = 'black';

    }

    else if (yourChose.textContent == weapons[0] &
        computerChose.textContent == weapons[1] ||
        yourChose.textContent == weapons[1] &
        computerChose.textContent == weapons[2] ||
        yourChose.textContent == weapons[2] &
        computerChose.textContent == weapons[0]) {
        result.textContent = 'You WIN!';
        result.style.color = 'green';
        yourCounter++;
        yourScore.textContent = yourCounter;
    }

    else {
        result.textContent = 'You lose!';
        result.style.color = 'red';
        computerCounter++;
        computerScore.textContent = computerCounter;
    }

    if (yourCounter > 0) {
        yourScore.style.color = 'green';
    }

    if (computerCounter > 0) {
        computerScore.style.color = 'red';
    }

}