// Menu---------------------------

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const bodyOverlay = document.querySelector('.page__body__overlay');

const navToggleOnClick = () => {
        document.body.classList.toggle('_lock');
        navMain.classList.toggle('main-nav--opened');
        bodyOverlay.classList.toggle('active');
};

if (navToggle) {
        navToggle.addEventListener('click', navToggleOnClick);
}

// Anchor---------------------------

const headerNav = document.querySelector('.main-nav__list');

const closeMenu = function (event) {
        if (event.target.classList.contains('main-nav__link')) {
                document.body.classList.remove('_lock');
                navMain.classList.remove('main-nav--opened');
                bodyOverlay.classList.remove('active');
        }
}

const buttonToScroll = function (event) {
        event.preventDefault();
        const id = event.target.getAttribute('href');
        navMain.addEventListener('click', closeMenu);
        if (id) {
                document.querySelector(id).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                });
        }
};

if (headerNav) {
    headerNav.addEventListener('click', buttonToScroll);
}

