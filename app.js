import Deck, { Card } from "./deck.js";

const aiHandFlip = document.querySelector(".aiHandFlip");
const playerHandFlip = document.querySelector(".playerHandFlip");
const aiHandElement = document.querySelector(".aiHand");
const playerHandElement = document.querySelector(".playerHand");
const text = document.querySelector(".text");
//prettier-ignore
const cardValues = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,
};
let playerHand;
let aiHand;
let inRound = false;
let gameEnd;

document.getElementById("play").addEventListener("click", () => {
  if (gameEnd) {
    startGame();
    return;
  }
  if (inRound) {
    endRound();
  } else {
    drawCards();
  }
});

startGame();
function startGame() {
  const deck = new Deck();
  deck.shuffle();

  const splitDeck = Math.ceil(deck.cardsNumber / 2);
  aiHand = new Deck(deck.cards.slice(0, splitDeck));
  playerHand = new Deck(deck.cards.slice(splitDeck, deck.cardsNumber));

  // USE LINES BELOW TO TEST WIN/LOSE CONDITIONS. BE SURE TO COMMENT OUT ASSOCIATED VARIABLE ABOVE
  //   aiHand = new Deck([new Card("♥", 2)]);
  //   playerHand = new Deck([new Card("♥", 2)]);

  console.log(playerHand);
  console.log(aiHand);

  inRound = false;
  gameEnd = false;

  endRound();
}

function endRound() {
  inRound = false;
  aiHandFlip.innerHTML = "";
  playerHandFlip.innerHTML = "";
  text.innerHTML = "";

  updateCount();
}

function updateCount() {
  aiHandElement.innerHTML = aiHand.cardsNumber;
  playerHandElement.innerHTML = playerHand.cardsNumber;
}

function drawCards() {
  inRound = true;

  const playerCard = playerHand.showCard();
  const aiCard = aiHand.showCard();

  playerHandFlip.appendChild(playerCard.gethtml());
  aiHandFlip.appendChild(aiCard.gethtml());

  updateCount();

  if (roundWinner(playerCard, aiCard)) {
    text.innerHTML = "You won that round";
    playerHand.push(playerCard);
    playerHand.push(aiCard);
  } else if (roundWinner(aiCard, playerCard)) {
    text.innerHTML = "You lose that round";
    aiHand.push(playerCard);
    aiHand.push(aiCard);
  } else {
    text.innerHTML = "Round tied";
    aiHand.push(aiCard);
    playerHand.push(playerCard);
  }
  if (gameOver(playerHand)) {
    text.innerText = "GAME OVER, YOU LOSE!";
    gameEnd = true;
  } else if (gameOver(aiHand)) {
    text.innerText = "YOU WIN THE GAME!";
    gameEnd = true;
  }
}

function roundWinner(cardOne, cardTwo) {
  return cardValues[cardOne.value] > [cardTwo.value];
}

function gameOver(hand) {
  return hand.cardsNumber === 0;
}
