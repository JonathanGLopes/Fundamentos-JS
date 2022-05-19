/*
    Operadores Aritméticos

    + Adição / Concatenação
    - Subtração
    * Multiplicação
    ** Potenciação
    % Operador binário. Retorna o inteiro restante da divisão dos dois operandos.
    ++ Incremento
    -- Decremento
*/

const numero1 = 10;
const numero2 = 20;
let numero3 = 5;  //Para adicionar incremento ou decremento a variável deve ser let, pois a const o valor não pode ser alterado.

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);

numero3++;
console.log(numero3);

const nome = 'Jonathan';
const sobrenome = 'Lopes';

console.log(nome +  sobrenome);