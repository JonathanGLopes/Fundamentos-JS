// Métodos úteis trabalhando com objetos.


// Há duas formas rápidas e intuitivas para copiar um objeto. Uma nós utilizamos o spread operator e outra o Object.assign, segue os exemplos abaixo.
// Lembrando que, ao criar uma variável e atribuir o objeto a ela, estamos linkando as duas e ao alterar o valor de um, o outro também será alterado. Desse jeito (const item = produto).
// Então não é uma boa forma caso a intenção seja copiar o objeto para usar seus valores de forma independente.
const produto = {
    nome: 'Caneca',
    preco: 2.5
}

// Spread
const item = {
    ...produto,
    material: 'plástico',
}

// Assign
const segundoItem = Object.assign({}, produto, { quantidade: 5});
// Lembrando que mesmo após copiar o objeto, podemos adicionar outras chaves a vontade, conforme os exemplos acima.

console.log(produto);
console.log(item);
console.log(segundoItem);
// Utilizando o método abaixo, nós podemos ver como estão as configurações relacionadas ao define property
console.log(Object.getOwnPropertyDescriptor(item, 'material'));
// Com o Object.values nós retornando apenas o valor da chave, assim como com o Object.keys nós temos o retorno da chave.
// E para obter os dois, nós usamos o Obect.entries
console.log(Object.entries(segundoItem));