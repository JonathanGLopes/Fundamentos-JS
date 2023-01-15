// Função construtora retorna um objeto
// Sempre inicia o nome da função com letra maiúscula
// Requer a utilização da palavra (new). Que cria um objeto vazio e faz o this apontar para esse objeto e retorna esse objeto para variá vel.

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa("Gustavo", "Oliveira");
const p2 = new Pessoa("Caio", "Augusto");

console.log(p1.nome);