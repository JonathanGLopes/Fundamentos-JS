/* Desafio 01 - Escrever uma função que recebe dois valores como parâmetro. Essa função deve retornar true se os dois valores forem iguais e do mesmo tipo, caso contrário false. */

function minhaFuncao (a, b){
    return a === b; //Neste cenário temos que utilizar os === para ter uma comparação tanto de valor quanto de tipo
}

console.log(minhaFuncao("1", "1"));
console.log(minhaFuncao(1, 1));