// Define Property e Define Properties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: false, // Se pode ou não alterar valor
        configurable: true, // Configurável
    });

    // Como podemos ver no exemplo, a diferença é que em um nós definimos a configuração de uma chave 
    // E no outro podemos fazer de várias, de forma que podemos escolher uma config mais específica pra uma chave se necessário.
    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: estoque, 
            writable: false, 
            configurable: true, 
        },
        preco: {
            enumerable: true, 
            value: estoque, 
            writable: false, 
            configurable: true, 
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500; // Podemos ver no log que o valor continua 3, pois o writable está como false, então não é possível alterar.
console.log(p1);