import Deck from "./deck.js";

const aiHandFlip = document.querySelector(".aiHandFlip");
let playerHandFlip;
let aiHandFlip;

console.log(deck.cards);

aiHandFlip.appendChild(deck.cards[0].gethtml());

function startGame() {
  const deck = new Deck();
  deck.shuffle();

  const splitDeck = Math.ceil(deck.cardsNumber / 2);
  aiHandFlip = new Deck(deck.cards.slice(0, splitDeck));
  playerHandFlip = new Deck(deck.cards.slice(splitDeck, deck.cardsNumber));
}
