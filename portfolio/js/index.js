import './modules/menu.js';
import './modules/switch-language.js';
import './modules/theme-toggle.js';
import './modules/portfolio-images.js';
import * as storage from './modules/storage.js';
import { getTranslate } from './modules/switch-language.js';
import './modules/video-player.js';

const getLocalStorage = () => {
    const lang = storage.getItem('lang');

    if (lang) {
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

    const currentTheme = storage.getItem('theme');

    if (currentTheme == 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
}

window.addEventListener('load', getLocalStorage);

// Self-check---------------------------

console.log(`
`);