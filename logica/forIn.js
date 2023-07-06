// For in representa o indice ou chave do objeto durante cada iteração.

const frutas = ['Pera', 'Maça', 'Uva', 'Laranja'];

//Neste exemplo temos o console log do i que a resposta dele é o indice de cada elemento do array frutas. E o frutas[i] é a sintaxe para obter o valor de cada indice.
for (let i in frutas){
    console.log(`O indice ${i} representa a fruta ${frutas[i]}`)
}



const pessoa = {
    nome: 'Jonathan',
    sobrenome: 'Lopes',
    idade: 26
};

//Aqui nós temos outro console log e no i dele nós temos o retorno de cada chave do objeto pessoa. E no pessoa [i] nós temos o valor de cada chave desse objeto.

for(let i in pessoa){
    console.log(`A chave do objeto pessoa é ${i} e seu valor é ${pessoa[i]}`)
}