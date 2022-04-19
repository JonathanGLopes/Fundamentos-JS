let cor = "azul";

switch (cor) {

    case "verde":
        console.log(siga);
        break;

    case "amarelo":
        console.log("ATENÇÃO!");
        break;
    
    case "vermelho":
        console.log("PARE!");
            break;

    default:
        console.log("não sei");
}

/*
Utilizando o Switch ao invés do IF/ELSE nós além de deixarmos o código mais
legível, também ajudamos o interpretador, pois ele vai parar assim que atingir
a condição em questão, com a sentença do break, e não vai repetir os comandos

E o default serve pra caso ele não caia em nenhuma das condições, vai emitir
uma mensagem
*/