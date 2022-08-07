//Maneiras de declarar uma função

// Declaração literal 
function cumprimento(){
    console.log("Olá");
}

cumprimento();

// Function expression
const dado = function(){
    console.log("Sou um dado");
};

function executaFuncao(funcao){
    funcao();
}
executaFuncao(dado);

// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}
funcaoArrow();