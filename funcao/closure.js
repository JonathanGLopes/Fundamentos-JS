// Closure é o escopo criado quando uma função é declarada
// É a habilidade que a função tem de acessar o seu escopo léxico
// Escopo que envolve a função
// Esse escopo permite a função acessar e manipular variáveis externas a função
// Contexto léxico em ação!


const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao());