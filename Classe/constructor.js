/*
    O constructor é um método especial em uma classe do JavaScript que é executado automaticamente quando um novo objeto é criado a partir da classe. 
        A função do constructor é inicializar as propriedades do objeto recém-criado (nome, idade).
*/

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Jonathan", 27);
console.log(pessoa1.nome);
console.log(pessoa1.idade);