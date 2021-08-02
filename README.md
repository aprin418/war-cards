# WAR

The game of war using a standard 52 card deck

# HOW TO PLAY

Just click the button to start the game. The deck will be shuffled evenly between the player and the computer. Than click the button to flip your cards and see who wins.

## Technologies Used

HTML, CSS, JavaScript

## Start Up Screen:

<!-- ![Gameplay Screen](img/PacManIntro.png) -->

# HOW TO INSTALL

1. _`Fork`_ and _`Clone`_ this respository to your local machine
2. Open `index.html` in your browser to play or
3. Open the directory in your text editor of choice to view or edit the code

# HOW IT WORKS

Just click the button and the game will do all the work for you. Good luck!

# CODE SNIPPETS

```
shuffle() {
    for (let i = this.cardsNumber - 1; i > 0; i--) {
      const newIdx = Math.floor(Math.random() * (i + 1));
      const oldIdx = this.cards[newIdx];
      this.cards[newIdx] = this.cards[i];
      this.cards[i] = oldIdx;
    }
  }
```

```
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
```

```
const suits = ["♥", "♠", "♦", "♣"];
```

```
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
```

# FUTURE CONSIDERATIONS

- Adding War functionality in event of a tie
- Adding more realistic card backs
