//Recursividade é quando a função ou objeto refere-se a si mesmo quando definido. Como podemos ver no exemplo abaixo, dentro da função fizemos a chamada dela mesma.

function recursiva(max){
    console.log(max);
    if(max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(-5);