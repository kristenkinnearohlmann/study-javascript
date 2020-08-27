let sequence = [];
let humanSequence = [];
let level = 0;

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');

function nextStep() {
    const tiles = ['red','green','blue','yellow'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];

    return random
}

function nextRound() {
    level +=1;

    // copy all the elements in the 'sequence' array to 'nextSequence'
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
}

function startGame() {
    startButton.classList.add('hidden');
    info.classList.remove('hidden');
    info.textContent = "Wait for the computer";
}

startButton.addEventListener('click',startGame);