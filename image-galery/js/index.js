import {getData} from './modules/get-data.js';
import './modules/clear-search.js';

getData();

const showData = (data) => {
    data.results.map((elem) => {
        const imageElement = document.createElement('img');
        imageElement.classList.add('gallery__image');
        imageElement.src = elem.urls.regular;
        imageElement.alt = elem.alt_description;
        galleryContainer.append(imageElement);
    })
}

const removeData = () => {
    const imageElements = document.querySelectorAll('.gallery__image');
    if (imageElements) {
        imageElements.forEach(element => {
            element.remove();
        });
    }
}

const clearSearch = () => {
    if (searchInput.value) {
        searchInput.value = '';
    }
}

const getUrl = () => {
    const searchQuery = searchInput.value;
    const newSearchQuery = searchQuery.replace(/\s/g, ',');
    url = `https://api.unsplash.com/search/photos?query=${newSearchQuery}&per_page=20&orientation=landscape&client_id=5nl4VW3783SH8KiriINIH-NPFaPNWD__wNmWN1GXv60`;
    getData();
}

searchButton.addEventListener('click', getUrl)

searchInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.which == 13 || event.keyCode == 13) {
        searchButton.click();
    }
});

searchClear.addEventListener('click', clearSearch);