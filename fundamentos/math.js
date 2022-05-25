let num1 = 9.51;
let num2 = Math.floor(num1); // Math.floor arredonda o número pra baixo
let num3 = Math.ceil(num1); // Math.ceil arredonda o número para cima
let num4 = Math.round(num1); // Arredonda para o número mais próximo

console.log(num2);
console.log(num3);
console.log(num4);

console.log(Math.max(1,2,3,4,50,100,1000)); // Devolve o maior número
console.log(Math.min(1,2,3,50,100,-1)); // Devolve o menor número

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Gera um número aleatório entre os números que escolher
console.log(aleatorio);