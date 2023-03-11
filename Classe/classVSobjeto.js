class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

const pessoaC = new Pessoa("Rafael", 25);
pessoaC.saudacao();


const novaPessoa = {
    nome: 'Douglas',
    idade: 27,
    saudacao: function(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

novaPessoa.saudacao();