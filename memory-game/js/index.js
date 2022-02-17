const cards = document.querySelectorAll('.game__card');
const reset = document.querySelectorAll('.game__reset');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const time = document.querySelector('.score__time');
let timer_observer;

let seconds = 0;
let minutes = 0;
let seconds_str = '';
let minutes_str = '';
let click = -1;

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

    setTimeout(shuffle, 500);
    time.innerHTML = '00:00';
    click = -1;
    clearInterval(timer_observer);
}

cards.forEach(card => card.addEventListener('click', flipCard));
reset.forEach(card => card.addEventListener('click', resetGame));