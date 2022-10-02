'use strict';

const btnAgain = document.querySelector(".again");
const guessNumber = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const message = document.querySelector(".message");

btnCheck.addEventListener("click", (e)=>{
    e.preventDefault();
    const input = Number(document.querySelector(".guess").value);

    if(!input){
        message.textContent = "❌ No number!"
    }
});