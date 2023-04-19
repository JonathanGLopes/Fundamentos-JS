const meuNome = 'Jonathan';

function primeiro(){
    const idade = 27;

    if(idade >= 30){
        const decada = 3;
        let novaGeracao = true;
    }

    function segundo(){
        const emprego = 'Desenvolvedor web';

        // Pegando dados da var meuNome no escopo global e a idade do pai.
        console.log(`Meu nome é ${meuNome}, tenho ${idade} anos e sou um ${emprego}`);
    }

    segundo();
}

/*
   Nesse contexto a função "segundo" consegue obter informações do pai e do contexto global, mas não pode acontecer o contrário. Se tentarmos um console.log dentro da função "primeiro" 
    para obter informações do filho, não vai ser possível. Só o filho obtem informações do pai.
*/

primeiro();