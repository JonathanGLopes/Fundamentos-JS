for (let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}

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