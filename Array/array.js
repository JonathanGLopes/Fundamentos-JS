const primeiroNome = 'Jonathan';
const nome = [primeiroNome, 'Lopes', 'Front-end Developer'];
console.log(nome)
console.log(nome.length)



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