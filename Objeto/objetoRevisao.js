// Coleção dinâmica de pares chave/valor

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123,
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    
    calcularValorSeguro: function(){
        //...
    }
}

//Exemplo simples para mostrar como um objeto pode ter um conjunto de objetos dentro de um array e também uma função dentro do objeto carro

console.log(carro)