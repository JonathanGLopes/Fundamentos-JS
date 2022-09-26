/**
 1 - Os parênteses, que é por onda a função recebe os argumentos (assim com as funções tradicionais)
 2 - "seta" => - Responsável pelo nome "arrow"
 3 - Chaves: o bloco de código que representa o corpo/escopo da função
 4 - Uma arrow function sempre será uma função anonima

 Abaixo alguns exemplos de utilização
 */

 function somar(a, b){
    let total = a + b;
    return console.log(total);
 }

 somar(10, 30);
 console.log("=============")

 let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2;
    console.log(total);
 }

 subtrair(50, 25);
 console.log("=============")

 
let numeros = [1, 3, 5, 10];

numeros.map((item) =>{
    console.log(item);
});