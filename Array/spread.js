// Spread Operator
// Ele tem a função de expandir os dados dentro de um outro elemnto iterável, como arrays e objetos.

let primeiro = [1, 2, 3, 4, 5];

let segundo = [primeiro, 6, 7, 8, 9, 10];

// Desta maneira nós conseguimos unir as informações dos 2 arrays, mas como podemos ver no console, fica um array dentro do outro e não todas informações juntas em um unico array.
console.log(segundo);

// Dessa forma usando o Spread Operator, nós usamos os ... antes da variável do array, e todas informações dela vão ser unidas ao outro formando assim um único array.
let segundoOperator = [...primeiro, 6, 7, 8, 9, 10];
console.log(segundoOperator);

const pessoa = {
  nome: "Jorge",
  sobrenome: "Menezes",
  idade: 43,
};

const info = {
  ...pessoa,
  cargo: "Gerente de projetos",
  codigo: 536597,
  telefone: 1155555555,
};

// O mesmo funciona com objetos, como podemos ver que o console devolveu as informações de ambos objetos apenas no info, também contendo as informações do pessoa
console.log(info);
