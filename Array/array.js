const primeiroNome = 'Jonathan';
const nome = [primeiroNome, 'Lopes', 'Front-end Developer'];
console.log(nome)
console.log(nome.length)


const amigo1 = 'Matheus';
const amigo2 = 'Leonardo';
const amigo3 = 'Carlos';
// Ao invés de armazenar nomes cada um em uma variável, podemos fazer um array para armezenar todos os dados


const amigos = ['Geovane', 'Alan', 'José', 'Felipe', 'Gustavo'];
console.log(amigos);
//E com o push nós podemos adicionar outro dado no fim do array, como no exemplo abaixo.
amigos.push("Marcos");
console.log(amigos);




const calculaIdade = function(anoNascimento){
    return 2037 - anoNascimento;
}

const anos = [1990, 1967, 2002, 2010, 2022];

const idade1 = calculaIdade(anos[0]);
const idade2 = calculaIdade(anos[1]);
const idade3 = calculaIdade(anos[anos.length - 1]);

console.log(idade1, idade2, idade3);

const idades = [calculaIdade(anos[0]), calculaIdade(anos[1]), calculaIdade(anos[anos.length - 1])];

console.log(idades);