const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const bodyStyle = getComputedStyle(document.body);
const backgroundBody = bodyStyle.backgroundColor;

for(let i of ps){
    i.style.backgroundColor = backgroundBody;
    i.style.color = "#FFF"
}