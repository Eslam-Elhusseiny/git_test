"use strict";
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const scoreP0 = document.querySelector("#score--0");
const scoreP1 = document.querySelector("#score--1");

const currentScoreP0 = document.querySelector("#current--0");
const currentScoreP1 = document.querySelector("#current--1");

const dice = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//
let playing, activePlayer, scores, currentScore;

const init = function () {
  playing = true;
  activePlayer = 0;
  scores = [0, 0];
  currentScore = 0;
  scoreP0.textContent = 0;
  scoreP1.textContent = 0;
  currentScoreP0.textContent = 0;
  currentScoreP1.textContent = 0;
  dice.classList.add("hidden");
  player0.classList.add("player--active");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--active");
  player1.classList.remove("player--winner");
};
init();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
