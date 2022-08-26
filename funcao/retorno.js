// return  - Retorna um valor - Termina a função

function soma(a, b){
    return a + b;
}

console.log(soma(10, 5));

//Retornando um objeto literal
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('Jonathan', 'Lopes');
console.log(p1);

function criaMultiplicador(multiplicador){
    //Multiplicador 
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);

console.log(duplica(5));
console.log(triplica(5));