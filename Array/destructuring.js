//Sem uso do destructuring
const arra = [1, 2, 3];

const a = arra[0];
const b = arra[1];
const c = arra[2];

console.log(a, b, c);

//Utilizando destructuring
const newArray = ['Jonathan', 'Carlos', 'Bruno'];
const [nome1, nome2, nome3] = newArray;

console.log(nome1, nome2, nome3);

//Pegando um array dentro do outro.
const nested = [1, 2, [3, 4]];
const [i, , h] = nested;
console.log(i, h);

//Pegando o valor individual de cada item do array interno.
const arrayIn = [10, 20, [30, 40]];
const [one, , [three, four]] = arrayIn;
console.log(one, three, four)