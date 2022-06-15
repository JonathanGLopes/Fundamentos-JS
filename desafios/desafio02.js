/* Desafio 02 - Escrever uma função que recebe um parâmetro e retorna o tipo do valor recebido nesse parâmetro */

function minhaFuncao(a){
    return typeof a; //Utilizando o typeof podemos descobrir o tipo do dado que está sendo passado.
}

console.log(minhaFuncao("texto"));
console.log(minhaFuncao(1,2,3,4));
console.log(minhaFuncao(true));