//O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto.

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const regata = new Camiseta('Regata', 50, 'Branca');

// Estamos falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype.
//Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto. 
//Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para Produto.prototype 

console.log(regata);