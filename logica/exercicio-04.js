'use strict';

// Problema 1
/*Nós trabalhamos para uma empresa construindo um termometro caseiro inteligente. 
Nossa tarefa recente é: Criar um array de temperaturas de um dia e calcular a amplitude da temperatura.
Tenha em mente que as vezes pode ocorrer um erro no sensor.*/

const temperaturas = [3, -2, -6, -1, 'erro', 9, 13, 17, 15, 14, 9, 5];

// (1)
// Entendendo o problema: fazer perguntas para facilitar a compreensão e resolução
// Exemplos:
// - O que é amplitude termica? - Diferença entre a mais alta e mais baixa
// - Como calcular as temperaturas max e min?

// (2)
// Dividindo ele em pequenos problemas
// - Como ignorar os erros?
// - Encontrar o valor max no array
// - Encontrar o valor min no array
// - Subtrair o min do max (amplitude) e retornar ele

const calcTempAmplitude = function(temps){
    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
        const tempAtual = temps[i];

        if(typeof tempAtual !== 'number') continue;

        if(tempAtual > max) max = tempAtual;
        if(tempAtual < min) min = tempAtual;
    }
    console.log(max, min);
    return max - min;
}

const amplitude = calcTempAmplitude(temperaturas);
console.log(amplitude);

// Problema 2
// A função agora deve receber 2 arrays de temperatura

// (1) Entendendo o problema
// Com 2 arrays, nós devemos implementar a mesma funcionalidade duas vezes? Não.

// (2) Dividindo em pequenos problemas
// - Mesclar dois arrays

const novoCalcTemp = function(t1, t2){
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
        const tempAtual = temps[i];
        if(typeof tempAtual !== 'number') continue;

        if(tempAtual > max) max = tempAtual;
        if(tempAtual < min) min = tempAtual;
    }
    console.log(max, min);
    return max - min;
};

const novaAmplitude = novoCalcTemp([3, 5, 1], [9, 0, 5]);
console.log(novaAmplitude);