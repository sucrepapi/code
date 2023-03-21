const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]


let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
     },
    {
        name: '',
        symbol: 'O'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-error');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');






const editPlayer1BtnElement = document.getElementById('edit-player1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player2-btn');
const cancelConfigButtonElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
const gameFieldElements = document.querySelectorAll('#game-board li');
// const confirmConfigButtonElement = document.getElementById('confirm-config-btn');
// const gameBoardElement = document.getElementById('game-board')

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);


cancelConfigButtonElement.addEventListener('click', cancelPlayerButton);
backdropElement.addEventListener('click', cancelPlayerButton);
// confirmConfigButtonElement.addEventListener('click', confirmPlayerButton);
formElement.addEventListener('submit', savePlayerConfig);
startNewGameBtnElement.addEventListener('click', startNewGame);


for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}