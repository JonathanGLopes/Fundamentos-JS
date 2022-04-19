let valor; // não inicializada
console.log(valor); // undefined, pois o valor não foi definido na hora de criar a variável

valor = null; // Ausência de valor
console.log(valor);

const produto = {}; //Neste caso o produto não é undefined porque foi atribuido a ele um objeto vazio {}, ao contrário do valor que não tem nada
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // EVITE ATRIBUIR UNDEFINED!!! NÃO FAZER ISSO !!!

produto.preco = null // sem preço

