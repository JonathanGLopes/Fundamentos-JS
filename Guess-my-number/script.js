'use strict';

const btnAgain = document.querySelector(".again");
const guessNumber = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const message = document.querySelector(".message");


let secretNumber = Math.trunc(Math.random() * 20) +1;
const inicialScore = 20;

btnCheck.addEventListener("click", (e)=>{
    e.preventDefault();
    const input = Number(document.querySelector(".guess").value);

    if(!input){
        message.textContent = "❌ No number!"
        
    } else if (input === secretNumber){
        message.textContent = "🎉 Correct Number!"
        guessNumber.textContent = secretNumber;
        document.body.style.backgroundColor = "#60b347";
        guessNumber.style.width = "30rem";

    } else if(input > secretNumber){
        message.textContent = "📈 Too high!";
        
    } else if(input < secretNumber){
        message.textContent = "📉 Too low!";
    }
});


btnAgain.addEventListener("click", (e) =>{
    score.textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    guessNumber.style.width = "15rem";
    guessNumber.textContent = "?";
    message.textContent = "Start guessing...";
    document.querySelector(".guess").value = '';
    document.querySelector(".guess").focus();
    document.body.style.backgroundColor = "#222";

});
