// Alguns exemplos de utilização dos seguintes métodos: Map, Filter, Every, Some, Find e FinxIndex

const array = [1, 2, 3, 4, 5];

// Com o map nós podemos percorrer o array e fazer um retorno a partir dele. O map sempre retorna um array do mesmo tamanho do original
const arrayMap = array.map(item => {
    if(item % 2 === 0){
        return item * 10;
    }

    return item;
});
console.log(arrayMap);



// Como o próprio nome diz, ele filtra um array. Diferente do map ele não pode alterar os valores, somente filtrar.
const arrayFilter = array.filter(item => item > 3).map(item => item * 10)
console.log(arrayFilter);



// Ele retorna um valor booleano. Ele retorna true caso todos(every) os itens passam numa condição.
// No caso o array só contém números, então o console retorna true porque ele passou na condição
const arrayEvery = array.every(item => typeof item === 'number');
console.log(arrayEvery);


// O some á parecido com o every, ao invés de verificar todos na condição, ele faz a checagem se pelo menos um deles passa
const arraySome = array.some(item => {
    return typeof item !== 'number';
});
console.log(arraySome);


// Find serve para encontrar um item do array conforme a condição, ele irá retornar o primeiro item do array que passa na condição que nós colocamos. Nesse exemplo o primeiro número par.
const arrayFind = array.find(item => item % 2 === 0);
console.log(arrayFind);


// FindIndex ao invés de retornar o valor, irá retornar o indice daquele valor no array, conforme a condição passada. Utilizando o mesmo exemplo do Find, ele irá retornar o indice do número 2
const arrayFindIndex = array.findIndex(item => item % 2 === 0);
console.log(arrayFindIndex);
