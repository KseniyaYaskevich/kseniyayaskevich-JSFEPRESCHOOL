const pageBody = document.querySelector('.page__body');
const modals = pageBody.querySelectorAll('.modal');
const modalLogin = pageBody.querySelector('.modal--login');
const modalVictory = pageBody.querySelector('.modal--victory');
const modalScore = pageBody.querySelector('.modal--score');
const closeButtons = document.querySelectorAll('.js-button-close');
const scoreButton = document.querySelector('.button--score');

export const closeModal = () => {
    pageBody.classList.remove('page__body--lock');
    modals.forEach(modal => modal.classList.remove('modal--show'));
};

export const openModalLogin = () => {
    pageBody.classList.add('page__body--lock');
    modalLogin.classList.add('modal--show');
};

export const openModalVictory = () => {
    pageBody.classList.add('page__body--lock');
    modalVictory.classList.add('modal--show');
};

export const openModalScore = () => {
    pageBody.classList.add('page__body--lock');
    modalScore.classList.add('modal--show');
};

closeButtons.forEach(button => button.addEventListener('click', closeModal));
scoreButton.addEventListener('click', openModalScore);