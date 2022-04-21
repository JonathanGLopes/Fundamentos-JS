const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4);

imprimirResultado(3, 4, soma);

imprimirResultado(3, 4, function(x, y){
    return x - y
});

//arrow function sempre será uma função anonima

imprimirResultado(3, 4, (x, y) => x * y)

//Também é possível criar uma função dentro de um objeto

const pessoa = {
    falar: function(){
        console.log("teste");
    }
}

pessoa.falar();