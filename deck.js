const suits = ["♥", "♠", "♦", "♣"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export default class Deck {
  constructor(cards = newDeck()) {
    this.cards = cards;
  }
  get cardsNumber() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = this.cardsNumber - 1; i > 0; i--) {
      const newIdx = Math.floor(Math.random() * (i + 1));
      const oldIdx = this.cards[newIdx];
      this.cards[newIdx] = this.cards[i];
      this.cards[i] = oldIdx;
    }
  }

  showCard() {
    return this.cards.shift();
  }

  push(card) {
    this.cards.push(card);
  }
}

export class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get color() {
    return this.suit === "♥" || this.suit === "♦" ? "red" : "black";
  }
  gethtml() {
    const handDiv = document.createElement("div");
    handDiv.innerText = this.suit;
    handDiv.classList.add("flippedCard", this.color);
    handDiv.dataset.value = `${this.value} ${this.suit}`;
    return handDiv;
  }
}

function newDeck() {
  return suits.flatMap((suit) => {
    return values.map((value) => {
      return new Card(suit, value);
    });
  });
}
