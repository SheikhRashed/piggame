// @ts-nocheck
'use strict';

// UI Selectors
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
// Rolling dice functionally
btnRoll.addEventListener('click', function () {
  // 1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display Dice Roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3 . checked for rolled 1
  if (dice !== 1) {
    // ADd dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // switch to next playerr
  }
});
