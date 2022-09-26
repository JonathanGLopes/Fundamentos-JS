// Ele funciona muito bem quando não sabemos a quantidade de parâmetros que a função irá receber, como no exemplo abaixo.
// Ao usa-lo, ele irá retornar um array.

function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);

    console.log(`Numero gerado foi: ${numeros[numeroGerado]}`); //Acessando através da posição deles no array para não vir um número fora dos que foram passados como argumento.
}

sorteador(1, 4, 22, 38, 51, 68, 97, 88, 60);