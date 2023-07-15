// Exemplo simples de introdução a desestruturação.

const pessoa = {
    nome: 'Jonathan',
    idade: 27,
    cidade: 'São Paulo',
}

//Na forma convencional de acessar o valor de uma chave do objeto, nós usamos a notação de ponto como no exemplo abaixo.

console.log(pessoa.nome);


const {nome, idade, cidade} = pessoa;

// Aqui usando a desestruturação nós podemos utilizar somente o nome do valor que queremos acessar, conforme o exemplo abaixo.
console.log(nome, idade);