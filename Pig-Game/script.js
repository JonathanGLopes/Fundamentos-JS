'use strict';

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");

//starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add("hidden");