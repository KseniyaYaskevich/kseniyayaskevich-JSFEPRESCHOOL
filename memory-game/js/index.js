import './modules/game.js';
import {shuffle} from './utils/shuffle.js';

const cards = document.querySelectorAll('.game__card');
const cardsNumber = cards.length;
shuffle(cards, cardsNumber);
