import i18Obj from './translate.js';

// Local-storage---------------------------

const ru = document.querySelector('#ru');
const en = document.querySelector('#en');

const getLocalStorage = function () {
    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        getTranslate(lang);
        if (lang === 'ru') {
            ru.checked = true;
        }
        if (lang === 'en') {
            en.checked = true;
        }
    } else {
        en.checked = true;
    }

    const currentTheme = localStorage.getItem("theme");

    if (currentTheme == "light") {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
}

window.addEventListener('load', getLocalStorage);

// Switch language---------------------------

const getString = function (language, key) {
    if (i18Obj[language].hasOwnProperty(key)) {
        return i18Obj[language][key];
    } else {
        return key;
    }
}

const getTranslate = function (language) {
    const dataElements = document.querySelectorAll('[data-i18]');
    const placeholdersElements = document.querySelectorAll('[data-placeholder]');

    for (const currentElement of dataElements) {
        currentElement.innerHTML = getString(language, currentElement.getAttribute('data-i18'));
    }

    for (const placeholder of placeholdersElements) {
        placeholder.setAttribute('placeholder', getString(language, placeholder.getAttribute('data-placeholder')));
    }
}

const saveLang = function (event) {
    let lang = event.target.id;
    localStorage.setItem('lang', lang);
    getTranslate(lang);
}

ru.addEventListener('click', saveLang);
en.addEventListener('click', saveLang);