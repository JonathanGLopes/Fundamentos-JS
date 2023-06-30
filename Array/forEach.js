//O método forEach() executa uma dada função para cada elemento de um array.

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numeros.forEach(function(valor, indice, array){
    console.log(`O número é ${valor} e está no indice ${indice}`);
});

const aprovados = ['Agatha', 'Yago', 'Daniel', 'Carol'];

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
});

/*
    Aqui utilizamos um forEach no array aprovados com uma função callbak com 2
    parametros(nome, indice). E no console log podemos ver o retorno do array iniciando no indice 1 como foi passado na template string
*/