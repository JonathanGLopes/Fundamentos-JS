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

//Adicionando
pilotos.splice(2,0, 'Bottas', 'Massa');
console.log(pilotos);

//Removendo
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) // Retorna um novo array a partir de terminado indice
console.log(algunsPilotos);