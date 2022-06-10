const nums = [1, 2, 3, 4, 5];

//O map gera um array do mesmo tamanho do outro que passamos, mas sem modifica-lo e sim criando outro.
let resultado = nums.map(function(e){
    return e * 2
});

console.log(resultado); // Aqui podemos ver que o array resultado tem o mesmo tamanho do nums, porém os valores são diferentes.