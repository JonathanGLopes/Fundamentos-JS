const pessoa1 = new Object();
pessoa1.nome = 'Jonathan';
pessoa1.sobrenome = 'Lopes';
pessoa1.idade = 27;
pessoa1.falarNome = function(){
    return (`${this.nome} está falando seu nome`);
};
pessoa1.dataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.dataNascimento());

// Criando molde de um objeto com Constructor Function

function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const p1 = new Pessoa('Jonathan', 'Lopes', 27);
console.log(p1);