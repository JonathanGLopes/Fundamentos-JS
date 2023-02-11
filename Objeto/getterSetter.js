/*
    Em JavaScript, os getters e setters são funções que são usadas para obter e definir valores de propriedades de objetos, respectivamente. 
    Eles são uma forma de encapsular o estado de um objeto e controlar o acesso a ele.
*/

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError("Valor do estoque deve ser um número");
            }
            estoquePrivado = valor;
        } 
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'teste';
console.log(p1.estoque);