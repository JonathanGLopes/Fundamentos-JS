
// String é uma cadeia de caracteres delimitada por aspas simples ou duplas

const nome = 'Jonathan';
const idade = 26;
const ano = 2022;

const apresentacao = "Eu sou " + nome +"," + " tenho " + idade + " anos " + "e estamos no ano de " + ano;

console.log(apresentacao);


// Aqui estamos utilizando template string
const apresentacao2 = `Eu sou ${nome}, tenho ${idade} anos e estamos no ano de ${ano}`;

console.log(apresentacao2)