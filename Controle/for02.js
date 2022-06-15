/*Aqui criamos uma função para calcular quantos anos faltam até uma pessoa fazer 18. Como parâmetro da função foi passado a idade atual e em seguida criamos uma estrutura de repetição utilizando o for.
O laço do for irá incrementar enquanto for menor do que 18, sendo assim com a condição passada basta informarmos a idade atual no parâmetro e obter o resultado.*/

function quantoAte18(idade){
    for(let i = 0; i < 18; i++){
        if(idade + i === 18){
            return i;
        }
    }
}

console.log(quantoAte18(7));