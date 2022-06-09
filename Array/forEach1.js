const aprovados = ['Agatha', 'Yago', 'Daniel', 'Carol'];

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
});

/*
    Aqui utilizamos um forEach no array aprovados com uma função callbak com 2
    parametros(nome, indice). E no console log podemos ver o retorno do array iniciando no indice 1 como foi passado na template string
*/