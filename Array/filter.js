// Filter sempre vai retornar um array com a mesma quantidade de elementos ou menos

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4999, fragil: true},
    {nome: 'Copo de vidro', preco: 18.49, fragil: true},
    {nome: 'Copo de plastico', preco: 13.49, fragil: true}
]

console.log(produtos.filter(function(produto){
    return produto.preco > 2400;
}));


//Retorne os números maiores que 10
const numeros = [5,22, 80, 27, 1, 8, 11, 15, 50, 30, 8, 3];

// function callbackFilter(valor, indice, array){
//     if(valor > 10){
//         return true;         // Essa função vai funcionar mas no exemplo abaixo temos o mesmo resultado com um código mais limpo.
//     } else {
//         return false;
//     }
// }

// No entanto é mais comum passar uma função anonima ou arrow function no filter do que criar uma função nova para isso.
const numerosFiltrados = numeros.filter(function(valor){
    return valor > 10;
});
// const numerosFiltrados = numeros.filter(valor => valor > 10); E também podemos reduzir o código dessa maneira quando a função tem apenas uma linha e retorna um único valor.

console.log(numerosFiltrados);



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com A

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    {nome: 'Alex', idade: 66},
];

const pessoasNome = pessoas.filter(function(objeto){
    return objeto.nome.length >= 5;
});

const pessoasIdade = pessoas.filter(objeto => objeto.idade > 50);

const nomeFinalA = pessoas.filter(objeto => {
    return objeto.nome.toLowerCase().endsWith('a');
});

console.log(nomeFinalA);