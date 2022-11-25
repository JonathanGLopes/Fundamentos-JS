/* A busca binária, difetente da linear ela não verifica elemento por elemento até chegar no resultado, ela consegue pular etapas para ter uma busca mais eficiente. Sempre dividindo por 2 a quantidade para ir descartando os que não fazem parte.
    Por exemplo: numa lista de 100 nós queremos o 80, então nessa busca vamos dividir e chegar no 50, depois verificar se está abaixo ou acima dele, então começar outra etapa de busca a partir do 50, descartando metade dos itens e agilizando o processo.
 */

// É imporante lembrar que a busca binária exige que a lista esteja ordenada.

function buscaBinaria(array, target){
    // Ordenar o array caso não esteja ordenado
    let primeiroIndex = 0;
    let ultimoIndex = array.length - 1;
    let indexMeio = 0;
    let contador = 0;


    while(ultimoIndex >= primeiroIndex){
        contador++;
        indexMeio = Math.floor((primeiroIndex + ultimoIndex)) / 2
        if (target > array[indexMeio]){
            primeiroIndex = indexMeio + 1
        } else if (target < array[indexMeio]){
            ultimoIndex = indexMeio - 1
        } else {
            console.log(`A busca binária levou ${contador} etapas`)
            return indexMeio;
        }
    }

    return -1;
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const target = 13;
const binariaIndex = buscaBinaria(array, target);

console.log(`Busca binária - Achou o elemento no index ${binariaIndex}`)