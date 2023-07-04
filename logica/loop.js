// Laços de repetição: for, while, do while, for in e for of.

// FOR
for(let contador = 0; contador < 5; contador ++){
    console.log(`O loop aconteceu ${contador} vezes`);
}

// WHILE
let contadorB = 0;
while(contadorB < 5){
    console.log(`O loop B aconteceu ${contadorB} vezes`)
    contadorB++
}


// DO ..WHILE
let contadorC = 0;
do {
    console.log(`O loop C aconteceu ${contadorC} vezes`);  // Faça oque está dentro do bloco "do" enquanto não corresponder a condição.
    contadorC++
} while (contadorC < 5);


//FOR IN
const numeros = [5, 10, 15, 20];
for(num in numeros){
    console.log(`Indice do array = ${num}`);
}

const nomes = ['Jonathan', 'Marcos', 'Luciano'];
for(valores of nomes){
    console.log(`Valores do array = ${valores}`)
}