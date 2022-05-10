const pessoa = {
    nome: 'Rebeca',
    idade: 25,
    peso: 70
}

console.log(Object.keys(pessoa)); //O keys pega todas as chaves de um objeto, pois o mesmo é formado de chaves e valores.
console.log(Object.values(pessoa)); //O values pega os valores do objeto.
console.log(Object.entries(pessoa)); // O Entries pega chave e valor do objeto devolvendo um array

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2022'
});

console.log(pessoa.dataNascimento)