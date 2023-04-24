/*
    Exercício consiste em percorrer cada elemento do array na função e na execução da mesma conseguir encontrar o item tanto utilizando letra miníscula ou maíscula.
*/

const compras = ["arroz", "Feijão", "Batata", "bolacha", "Cocada", "tomada"];

function encontrar(produto){
    let resultado = "Produto não encontrado";
    compras.forEach((item) => {
        if(item.toLowerCase() === produto.toLowerCase()){
            resultado = "Produto encontrado"
        } 
    });

    return console.log(resultado);
}

// Como podemos ver no log, utilizando mais de uma letra maíscula o item foi encontrado, a lógica é feita para não diferenciar por conta disso.

encontrar('batata');
encontrar('BaTata');
encontrar('Batat');
