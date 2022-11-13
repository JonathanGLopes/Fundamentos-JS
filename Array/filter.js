const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4999, fragil: true},
    {nome: 'Copo de vidro', preco: 18.49, fragil: true},
    {nome: 'Copo de plastico', preco: 13.49, fragil: true}
]

console.log(produtos.filter(function(produto){
    return produto.preco > 2400;
}));