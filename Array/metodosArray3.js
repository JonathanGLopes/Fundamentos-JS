//Organizando em ordem alfabetica
const letras = ['F', 'C', 'B', 'A', 'E', 'G', 'D'];
letras.sort();
console.log(letras);


//Modificando o elemento de um array através do índice
const nomes = ['Jonathan', 'Geovane', 'Carlos', 'Matheus', 'Jessica', 'Leonardo', 'Alan'];
nomes[5] = 'Marcos';
console.log(nomes);

//Concatenando arrays
const listaCompras = ['Laranja', 'Maça', 'Limão'];
const listaCompras2 = ['Agua', 'Leite', 'Refrigerante'];
const listaCompras3 = ['Tempero', 'Carne', 'Oleo'];

const listaCompleta = listaCompras.concat(listaCompras2, listaCompras3);
console.log(listaCompleta.sort());

//Checando se o item existe no array e retornando seu indice/nome
const produtos = ['Controle', 'Monitor', 'TV', 'Teclado', 'Gabinete'];

const verificaProdutos = produtos.indexOf('TV');

verificaProdutos === -1 ? console.log('Produto não existe') : console.log(`Produto encontrado: ${produtos[verificaProdutos]}`); //Operação ternária 


//Verificando se o item existe no array e retornando true ou false
const produtos2 = ['Controle', 'Monitor', 'TV', 'Teclado', 'Gabinete'];

console.log(produtos2.includes('Teclado')); // true
console.log(produtos2.includes('Mouse')); // false


//Substituindo a vírgula entre os elementos por outro caracter

const techs = ['HTML', 'CSS', 'JavaScript', 'React JS', 'React Native'];

console.log(techs.join(' / '));

//Slice pede 2 parametros, o primeiro é o indice do array e o segundo o elemento. Ele irá retornar do indice que passamos até o elemento escolhido, antes e após eles não irão aparecer.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.slice(1, 6));