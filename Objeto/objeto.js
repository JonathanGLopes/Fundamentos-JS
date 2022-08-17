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

// console.log(jonathanArray);
// console.log(jonathan);

// Podemos adicionar uma nova propriedade no Objeto através da notação de ponto, como no exemplo abaixo adicionaod a cidade.
jonathan.cidade = 'São Paulo';

// E também podemos dar o log em uma parte específica do objeto, caso não queira puxar todos os elementos dele.
console.log(jonathan.sobrenome);


//Aqui utilizamos a notação de ponto para pegar o nome da pessoa no objeto, a quantidade de amigos através do length e um amigo específico pelo índice do array
console.log(`${jonathan.nome} tem ${jonathan.amigos.length} amigos, e um dos seus amigos se chama ${jonathan.amigos[2]}`);