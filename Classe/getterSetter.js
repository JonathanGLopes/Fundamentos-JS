class Pessoa {
constructor(nome) {
    this._nome = nome;
}

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        if (typeof novoNome === 'string') {
        this._nome = novoNome;
        } else {
        throw new Error('O nome deve ser uma string');
        }
    }
}

const pessoa = new Pessoa('Jonas');
console.log(pessoa.nome); 

pessoa.nome = 'Jonathan';
console.log(pessoa.nome); 

pessoa.nome = 123; // Gera um erro
