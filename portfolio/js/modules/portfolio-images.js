// Change portfolio images---------------------------

const portfolioBtns = document.querySelector('.portfolio__buttons');
const portfolioImages = document.querySelectorAll('.portfolio__img');
const portfolioBtn = document.querySelectorAll('.portfolio__button');

const changeClassActive = function (event) {
        portfolioBtn.forEach(btn => btn.classList.remove('button--active'));
        event.target.classList.add('button--active');
};

const changeImage = function (event) {
        if (event.target.classList.contains('portfolio__button')) {
                changeClassActive(event);
                portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
        }
};

portfolioBtns.addEventListener('click', changeImage);


// Preload portfolio images---------------------------

const seasons = ['winter', 'spring', 'summer', 'autumn'];

const preloadImages = function (...seasons) {
        seasons.forEach((value, i) => {
                const img = new Image();
                img.src = `./assets/img/${value}/${i}.jpg`;
        });
}
preloadImages();