const nome = ['Jonathan', 'Geovane', 'Carlos'];

for (let i of nome){
    console.log(i)
}

nome.forEach(function(valor, indice){
    console.log(valor, indice)
});

// For clássico - Geralmente com iteráveis (Arrays ou Strings)
//For in = Retorna o índice ou chave (String, Array ou Objetos)
// For of = Retorna o valor em si (iteráveis = Arrays ou Strings)



//For clássico
// for (let i = 0; i < nome.length; i++){
//     console.log(nome[i]);
// }

// for(let i in nome){
//     console.log(nome[i]);
// }
