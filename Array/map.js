//Dobre os números

const numeros = [5, 25, 10, 30, 40, 50, 60];

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    {nome: 'Alex', idade: 66},
];

const nomes = pessoas.map(function(objeto){
    return objeto.nome;
});

const idades = pessoas.map(objeto => ({idade: objeto.idade}));


//Fazendo dessa forma nós iremos alterar o objeto original. Se dermos um log no objeto pessoas, vamos ver que foi adicionado uma chave id a ele.
// const id = pessoas.map(function(objeto, indice){
//     objeto.id = indice + 1;
//     return objeto
// });

// Se o objetivo não for alterar o objeto original mas sim retornar um novo com uma chave id, podemos fazer conforme o exemplo abaixo.
const novoId = pessoas.map(function(objeto, indice){
    const novoObjeto = {...objeto}; /// Spread operator
    novoObjeto.id = indice + 1;
    return novoObjeto;
});

console.log(novoId)
