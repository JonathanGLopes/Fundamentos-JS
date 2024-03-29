let dobro = function (a) {
    return 2 * a 
}

dobro = (a) => {
    return 2 * a    //Arrow function
}

dobro = a => 2 * a //Arrow function quando se tem um parâmetro único, normalmente usados numa função que tem uma única linha e executa uma única tarefa.

let ola = function () {
    return "Olá"
}

const anosAposentadoria = (anoNascimento, nome) => {
    const idade = 2037 - anoNascimento;
    const aposentadoria = 65 - idade;
    return `${nome} irá se aposentar em ${aposentadoria} anos`;
}

console.log(anosAposentadoria(1995, 'Jonathan'));
console.log(anosAposentadoria(1980, 'Marcos'));