//  Busca linear consiste em verificar cada item de uma lista de elementos até encontrar o item desejado. Assim como no exemplo abaixo temos um array de 15 números, para encontrar o número 15 ele vai verificar 15 vezes,
// isso num cenário maior pode causar problemas na performace da aplicação. Por isso o mais indicado é usar a busca binária.


function buscaLinear(array, target){
    let index = -1;
    let contador = 0;
    for(let i = 0; i < array.length; i++){
        contador ++;
        if(array[i] === target){
            console.log(`A busca linear levou ${contador} etapas`)
            index = i;
        }
    }

    return index;
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const target = 13;

const linearIndex = buscaLinear(array, target);
console.log(`Busca linear - Achou o elemento no index ${linearIndex}`);