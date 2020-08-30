// https://freshman.tech/simon-game/

let sequence = [];
let humanSequence = [];
let level = 0;

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');
const heading = document.querySelector('.js-heading');
const tileContainer = document.querySelector('.js-container');

function humanTurn(level) {
    tileContainer.classList.remove('unclickable');
    info.textContent = `Your turn: ${level} Tap${levl > 1 ? 's' : ''}`;
}

function activateTile(color) {
    const tile = document.querySelector(`[data-tile='${color}']`);
    const sound = document.querySelector(`[data-sound='${color}']`);

    tile.classList.add('activated');
    sound.play();

    setTimeout(() => {
        tile.classList.remove('activated');
    }, 300);
}

function playRound(nextSequence) {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            activateTile(color);
        }, (index + 1) * 600);
    });
}

function nextStep() {
    const tiles = ['red','green','blue','yellow'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];

    return random
}

function nextRound() {
    level +=1;

    tileContainer.classList.add('unclickable');
    info.textContent = 'Wait for the computer';
    heading.textContent = `Level ${level} of 20`;

    // copy all the elements in the 'sequence' array to 'nextSequence'
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
    playRound(nextSequence);

    sequence = [...nextSequence];
    setTimeout(() => {
        humanTurn(level);
    }, level * 600 + 1000);
}

function startGame() {
    startButton.classList.add('hidden');
    info.classList.remove('hidden');
    info.textContent = "Wait for the computer";
    nextRound();
}

startButton.addEventListener('click',startGame);
tileContainer.addEventListener('click', event => {
    const { tile } = event.target.dataset;

    if (tile) handleClick(tile);
})