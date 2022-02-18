const cards = document.querySelectorAll('.game__card');
const scoreButton = document.querySelector('.button--score');
const resetButton = document.querySelector('.button--reset');
const playAgainButton = document.querySelector('.button__play-again');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let click = -1;

const time = document.querySelector('.result__time');
let timerObserver;
let seconds = 0;
let minutes = 0;
let seconds_str = '';
let minutes_str = '';

const moves = document.querySelector('.result__moves');
let movesCount = 0;

const pageBody = document.querySelector('.page__body');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.button__close');

const modalVictory = document.querySelector('.modal--victory');
const victoryMoves = document.querySelector('.victory__moves');
const victoryTime = document.querySelector('.victory__time');

const modalScore = document.querySelector('.modal--score');

const maxCards = cards.length;
let countMatches = 0;

shuffle();

function startTime(seconds, minutes) {
    timer_observer = setInterval(() => {
        seconds > 58 ? ((minutes += 1), (seconds = 0)) : (seconds += 1);
        seconds_str = seconds > 9 ? `${seconds}` : `0${seconds}`;
        minutes_str = minutes > 9 ? `${minutes}` : `0${minutes}`;
        time.innerHTML = `${minutes_str}:${seconds_str}`;
        // if () {
        // 	return;
        // }
    }, 1000);
}

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

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 16);
        card.style.order = ramdomPos;
    });
};

function resetGame() {
    cards.forEach(card => card.classList.remove('flip'));
    hasFlippedCard = false;
    lockBoard = false;
    cards.forEach(card => card.addEventListener('click', flipCard));
function wonGame() {
    clearInterval(timerObserver);
    pageBody.classList.add('page__body--lock');
    modalVictory.classList.add('modal--show');
    victoryMoves.innerHTML = movesCount;
    victoryTime.innerHTML = time.innerHTML;
};

    setTimeout(shuffle, 500);
    time.innerHTML = '00:00';
    click = -1;
    clearInterval(timer_observer);
}

cards.forEach(card => card.addEventListener('click', flipCard));
reset.forEach(card => card.addEventListener('click', resetGame));