// Function factory é uma função que retorna um objeto
// Quando uma função está dentro de um objeto nós a chamamos de função de método

function criarPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criarPessoa('Jonathan', 'Lopes', 1.8, 60);
console.log(p1.imc());
console.log(p1.fala('falando sobre JS'));




function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('TV', 3999.99))