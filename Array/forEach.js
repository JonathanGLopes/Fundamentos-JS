//O método forEach() executa uma dada função para cada elemento de um array.

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numeros.forEach(function(valor, indice, array){
    console.log(`O número é ${valor} e está no indice ${indice}`);
});