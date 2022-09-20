// Desconstruindo um objeto

let pessoa = {
    nome: 'Jonathan',
    sobrenome: 'Lopes',
    cidade: 'Sao Paulo'
};

//console.log(pessoa.nome);
//console.log(pessoa.cidade);

const {nome, sobrenome, cidade} = pessoa;

console.log(nome);
console.log(cidade);

// Desconstruindo um array

let nomes = ['Jonathan', 'Geovane', 'Carlos', 'Matheus'];

// Aqui passamos a posição do array mais o valor que queremos pegar
let {1: Geovane} = nomes;

console.log(Geovane);

// E aqui colocamos as informações conforme a posição de cada um no array, como no exemplo abaixo o terceiro nome é o Carlos e o mesmo sai como resposta no console
let [primeiroNome, segundoNome, terceiroNome] = nomes;

console.log(terceiroNome);