//O Array.from é um método em JavaScript que é usado para criar um novo array a partir de um objeto que seja "iterável"
//(ou seja, que pode ser percorrido em um loop, como uma string, um array-like object, um mapa, um conjunto, etc.).

const numeros = Array.from({ length: 10 }, (_, i) => i + 1);

console.log(numeros);

const numeroInicial = 50;
const tamanhoLista = 21;

listaNumeros = Array.from(
  { length: tamanhoLista },
  (_, i) => numeroInicial + i
);

console.log(listaNumeros);

// Usando o Array.from para transformar um iterável em um array.
const nome = "Jonathan";
const nomeArray = Array.from(nome);
console.log(nomeArray);
