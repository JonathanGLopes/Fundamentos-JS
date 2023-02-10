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



function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 70);
p1.desconto(50);
console.log(p1);