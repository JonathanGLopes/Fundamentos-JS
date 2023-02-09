/*
    Javascript é baseado em protótipos para passar pripriedades e métodos de um objeto para outro.

    Definição de protótipo:
    Protótipo é o termo usado para se referir ao que foi criado pela primeira vez,
    servindo de modelo ou molde para futuras produções.

*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL:' + this.nome + ' ' + this.sobrenome;
}

// Criando o método nomeCompleto dessa forma, nós melhoramos a performace da nossa aplicação. Pois cada novo objeto irá herdar automaticamente através do prototype.

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Jonathan', 'Lopes');

console.log(pessoa1);