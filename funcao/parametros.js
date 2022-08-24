// A função definida com a palavra function tem uma variavel especial chamada arguments que sustenta todos os argumentos enviados. Não funciona com Arrow funcion
function funcao() {
   let total = 0;
   for(let argumento of arguments){
    total += argumento;
   }
   console.log(total);
   console.log(arguments)
}

funcao(3, 3, 3);


/*Os ... no terceiro parâmetro indica que ele é um rest operator, quer dizer que tudo que todos argumentos que vierem após os 2 primeiros vão ser armazenados nele.
Como no exemplo abaixo, o primeiro é o sinal de +, depois o 1 do acumulador e o restante dos números vão para o parâmetro numeros. Lembrando que o rest operator sempre deve ser o ultimo parâmetro da função. */
function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}

conta('+', 1, 20, 10, 40);