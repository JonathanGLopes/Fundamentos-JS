// For in = Lê os índices ou chaves do objeto

const frutas = ['Pera', 'Maça', 'Uva', 'Laranja'];

for (let i in frutas){
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Jonathan',
    sobrenome: 'Lopes',
    idade: 26
};

for(let i in pessoa){
    console.log(i, pessoa[i])
}