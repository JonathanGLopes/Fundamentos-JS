const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Hamilton'];
pilotos.pop(); 
console.log(pilotos); // Remove o ultimo indice do array

pilotos.push('Verstappen');
console.log(pilotos); // Adiciona no ultimo indice do array

pilotos.shift(); // Remove o primeiro indice da lista
console.log(pilotos);

pilotos.unshift('Leclerc'); //Adiciona no indice 0 
console.log(pilotos);

// Splice pode adicionar ou remover elementos
// pilotos.splice(índice atual, delete, elemento1, elemento2, etc..);
// Utilizando índice negativo, o -1 corresponde ao ultimo índice, -2 o penultimo e assim por diante.
//Adicionando
pilotos.splice(2,0, 'Bottas', 'Massa');
console.log(pilotos);

//Removendo
pilotos.splice(3, 1);
console.log(pilotos);

//Removendo com indice negativo
const removido = pilotos.splice(-1, 1);
console.log(`O item ${removido} foi removido com o splice`);

const algunsPilotos = pilotos.slice(2) // Retorna um novo array a partir de terminado indice
console.log(algunsPilotos);