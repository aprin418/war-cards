import Deck from "./deck.js";

const aiHandFlip = document.querySelector(".aiHandFlip");

const deck = new Deck();
deck.shuffle();
console.log(deck.cards);

aiHandFlip.appendChild(deck.cards[0].gethtml());
