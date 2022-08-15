/*Aqui utilizando um array para armazenar informações de uma pessoa, nós não temos bem claro oque são os dados inseridos, 
então para isso utilizamos os objetos, neles podemos colocar o nome do dado a ser inserido, como podemos ver no exemplo abaixo. */
const jonathanArray = [
    'Jonathan',
    'Lopes',
    '26',
    'Developer',
    ['Matheus', 'Carlos', 'Geovane']
];

// Objeto
const jonathan = {
    nome: 'Jonathan',
    sobrenome: 'Lopes',
    idade: 26,
    profissão: 'Developer',
    amigos: ['Matheus', 'Carlos', 'Geovane']
};

console.log(jonathanArray);
console.log(jonathan);