// Object.preventExtensions = Ele evita com que você adicione novos atributos a um objeto
const produto = Object.preventExtensions({
    nome: 'teste', preco: 1.99, tag: 'promocao'
});

//Essa função ela verifica se o objeto foi criado com prevent extension
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto); // Verificando pelo console log podemos ver que o objeto pode ser modificado porém não pode ser adicionado nada a ele.


//Object.seal = Aqui podemos apenas modificar os atributos existentes, mas não podemos adicionar nem remover do objeto
const pessoa = {nome:'Juliana', idade: 35}
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa)); // Aqui podemos conferir se o objeto está selado ou não.

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa); // Verificando vemos que a alteração foi feita mas não foi possível excluir nem adicionar ao objeto