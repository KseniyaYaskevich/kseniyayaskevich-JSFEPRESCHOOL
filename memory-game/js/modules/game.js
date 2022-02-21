import {closeModal, openModalLogin, openModalVictory} from './modals.js';
import {getData} from './get-data.js';
import * as storage from './storage.js';
import {shuffle} from '../utils/shuffle.js';

const cards = document.querySelectorAll('.game__card');
const time = document.querySelector('.result__time');
const moves = document.querySelector('.result__moves');
const victoryUser = document.querySelector('.victory__user');
const victoryMoves = document.querySelector('.victory__moves');
const victoryTime = document.querySelector('.victory__time');
const resetButton = document.querySelector('.button--reset');
const newGameButton = document.querySelector('.button__play-again');
const resultUser = document.querySelector('.result__user');
const resultUserName = document.querySelector('.result__user-name');
const loginInput = document.querySelector('.login__input');
const saveButton = document.querySelector('.button--save');

const cardsNumber = cards.length;
let click = -1;
let seconds = 0;
let minutes = 0;
let firstCard, secondCard;
let lockBoard = false;
let hasFlippedCard = false;
let movesCount = 0;
let countMatches = 0;

let timerObserver;
let seconds_str = '';
let minutes_str = '';

let scoreResults = [];
let userName = '';

function flipCard() {
    if (click === -1) {
        startTime(seconds, minutes)
    };

    click = 1;

    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    movesCount += 1;
    moves.innerHTML = movesCount;
    checkForMatch();
};

function startTime(seconds, minutes) {
    timerObserver = setInterval(() => {
        seconds > 58 ? ((minutes += 1), (seconds = 0)) : (seconds += 1);
        seconds_str = seconds > 9 ? `${seconds}` : `0${seconds}`;
        minutes_str = minutes > 9 ? `${minutes}` : `0${minutes}`;
        time.innerHTML = `${minutes_str}:${seconds_str}`;
    }, 1000);
};

function checkForMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        disableCards();
        countMatches += 1;
        if (countMatches === cardsNumber / 2) {
            wonGame();
        }
        return;
    }
    unflipCards();
};

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
};

function wonGame() {
    clearInterval(timerObserver);
    openModalVictory();
    victoryUser.innerHTML = userName;
    victoryMoves.innerHTML = movesCount;
    victoryTime.innerHTML = time.innerHTML;

    let gameResults = {
        userName: userName,
        moves: movesCount,
        time: time.innerHTML
    };

    scoreResults.push(gameResults);
    getData(scoreResults);
    storage.setItem('scoreResults', JSON.stringify(scoreResults));
};

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
};

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
};

function newGame() {
    resetBoard();
    click = -1;
    movesCount = 0;
    countMatches = 0;
    moves.innerHTML = movesCount;
    time.innerHTML = '00:00';

    clearInterval(timerObserver);

    cards.forEach(card => card.classList.remove('flip'));
    setTimeout(shuffle(cards, cardsNumber), 600);

    cards.forEach(card => card.addEventListener('click', flipCard));
};

function getLocalStorage() {
    if (storage.getItem('scoreResults')) {
        scoreResults = JSON.parse(storage.getItem('scoreResults'));
        getData(scoreResults);
    }
    if (storage.getItem('userName')) {
        userName = storage.getItem('userName');
    } else {
        userName = 'Player';
        openModalLogin();
    }
    resultUserName.textContent = userName;
};

function onButtonSaveClick() {
    userName = loginInput.value;
    if (userName == '') {
        userName = 'Player';
    }
    resultUserName.textContent = userName;
    storage.setItem('userName', userName);
    closeModal();
};

window.addEventListener('load', getLocalStorage);

cards.forEach(card => card.addEventListener('click', flipCard));
resetButton.addEventListener('click', newGame);
newGameButton.addEventListener('click', newGame);
newGameButton.addEventListener('click', closeModal);
resultUser.addEventListener('click', openModalLogin);
saveButton.addEventListener('click', onButtonSaveClick);
loginInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.which == 13 || event.keyCode == 13) {
        saveButton.click();
    }
});