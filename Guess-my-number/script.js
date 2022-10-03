'use strict';

const btnAgain = document.querySelector(".again");
const guessNumber = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const message = document.querySelector(".message");


const secretNumber = Math.trunc(Math.random() * 20) +1;
const inicialScore = 20;
guessNumber.textContent = secretNumber;

btnCheck.addEventListener("click", (e)=>{
    e.preventDefault();
    const input = Number(document.querySelector(".guess").value);

    if(!input){
        message.textContent = "❌ No number!"
        
    } else if (input === secretNumber){
        message.textContent = "🎉 Correct Number!"
        document.body.style.backgroundColor = "green";
    } else if(input > secretNumber){
        message.textContent = "📈 Too high!";
    } else if(input < secretNumber){
        message.textContent = "📉 Too low!";
    }
});
