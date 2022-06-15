/* Desafio 03 - Escreva uma função que recebe 6 parâmetros (a,b,c,d,e,f). Faça a soma de a com b. O resultado da soma, subtraia o valor de c.
     O resultado da subtração, multiplique por d e faça divisão por e. Para finalizar, faça o resultado elevado a potência de f. */

function minhaFuncao(a,b,c,d,e,f){
    let soma = a + b;
    let sub = soma - c;
    let div = sub * d / e;
    let resultado = div ** f;
    return resultado;
}

console.log(minhaFuncao(6,5,4,3,2,1));
console.log(minhaFuncao(6,2,1,4,2,3));