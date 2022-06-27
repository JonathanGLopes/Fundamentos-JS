// Atribuição via desestruturação (Array)

let  a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);  // Aqui utilizamos a atribuição para reatribuir o valor das variáveis a, b, c 



//                   0        1        2
//                 0 1 2    0 1 2    0 1 2
const numeros = [ [1,2,3], [4,5,6], [7,8,9] ];

const [indice1, indice2, indice3] = numeros;
console.log(indice2[1]); // Aqui acessamos o indice 1 dentro do indice 2 do array numeros