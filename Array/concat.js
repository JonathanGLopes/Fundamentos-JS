// Concatenação dos arrays.
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const novoArray = array1 + array2;
//Utilizando o sinal de + nós não estamos concatenando, mas sim apenas unindo o valor dos arrays em uma string e não criando um novo array com os valores.
//Como podemos ver no console.log abaixo mostrando o typeof do novoArray
console.log(novoArray);
console.log(typeof novoArray);


// Com o método concat nós realizamos a concatenação dos arrays e ainda podemos adicionar valores adicionais como no exemplo abaixo.
const concatArray = array1.concat(array2, 'Jonathan', [11, 12, 13]);
console.log(concatArray);


// E também podemos usar o spread operator, que utiliza a sintaxe conforme o exemplo abaixo, com os ... antes do novo array a ser adicionado.
const spreadArray = [...array1, ...array2, ...[11, 12, 13], 'Jonathan'];
console.log(spreadArray);