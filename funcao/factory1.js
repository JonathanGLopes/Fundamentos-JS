// Function factory é uma função que retorna um objeto


function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())


/*
    Neste segundo exemplo nós personalizamos os dados a partir dos parametros.
*/

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('TV', 3999.99))