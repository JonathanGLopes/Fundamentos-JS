// IIFE -> Immediately Invoked Function Expression
// A função se torna uma expressão que é imediatamente executada. A variável definida dentro da expressão não pode ser acessada fora de seu escopo.
// Assim sendo protegida do escopo global
// Sintaxe

(function(idade, altura){

    const sobrenome = 'Lopes';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Jonathan'));
    }

    falaNome();
    console.log(idade, altura);

})(26, 1.80);