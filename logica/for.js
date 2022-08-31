const frutas = ['Maça', 'Laranja', 'Melão', 'Uva', 'Abacaxi', 'Limão'];


// Na condição frutas.length, estamos usando o tamanho do array como uma condição
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}

// console.log("linha 1");
// console.log("linha 2");
// console.log("linha 3");
// console.log("linha 4");
// console.log("linha 5");


// O loop continua sendo executado enquanto a condição for verdadeira.
for (let i = 0; i <= 5; i ++) {
    console.log(`Linha ${i}`) 
}


// Calculando idade utilizando o loop
const anos = [1995, 1990, 1998, 2000];
const idade = [];

for (let i = 0; i < anos.length; i++){
    idade.push(2022 - anos[i]);
}

console.log(idade);

// Utilizando continue
const testeArray = ['Jonathan', 'Lopes', 'Developer', 26, 2022, 'JavaScript', 'Coding'];
console.log("-----SOMENTE STRINGS-----");
// Neste exemplo utilizando o continue, o loop irá ignorar tudo que não for uma string e imprimir no console.
for( let i = 0; i < testeArray.length; i++){
    if(typeof testeArray[i] !== 'string') continue;

    console.log(testeArray[i], typeof testeArray);
}
