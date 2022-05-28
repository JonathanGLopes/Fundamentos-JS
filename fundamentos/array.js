// Array é uma forma de agrupar multiplos valores numa única estrutura. O conteúdo de uma array fica dentro de colchetes [] e separado por vírgula.
//                 0       1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos); // podemos buscar pelo array completo utilizando o nome da variável 
console.log(alunos[0]); // ou buscar pelo indice do array
console.log(alunos[2])

console.log(alunos.length); // Buscando o tamanho do array

alunos.push('Fernanda'); // Adicionando novo item ao fim array
alunos.unshift('Marcos'); // Adicionando ao inicio do array
console.log(alunos);

// alunos.pop(); // pop remove o ultimo elemento do array
// alunos.shift(); // shift remove o primeiro elemento do array
// console.log(alunos);