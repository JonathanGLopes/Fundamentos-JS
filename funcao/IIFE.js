// IIFE -> Immediately Invoked Function Expression
// A função se torna uma expressão que é imediatamente executada. A variável definida dentro da expressão não pode ser acessada fora de seu escopo.

// Sintaxe

(function(){
    console.log("Será executado na hora!");
    console.log("Foge do escopo mais abrangente");
})();