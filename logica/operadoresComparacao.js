/*
    >   Maior que
    >=  Maior ou igual a
    <   Menor que
    <=  Menor ou igual a
    ==  Igualdade (verifica valor)
    === Igualdade estrita (verifica valor e tipo)
    !=  Diferente (verifica valor)
    !== Diferente estrito (verifica valor e tipo)

*/

const num1 = 10; // Number
const num2 = '10'; // String
const comp = num1 == num2; // O console irá retornar true mas os tipos são diferentes, por isso o indicado é utilizar ===
console.log(comp);

const comp2 = num1 === num2;
console.log(comp2); // Neste exemplo já retorna falso pois essa comparação verifica valor e tipo. O mesmo funciona para o != e !==