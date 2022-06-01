/**
    && = and  > Todas as expressões precisam ser verdadeiras para retornar true
    || = or
    ! = not
 */

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456'; // Para retornar true o usuário precisa ser idêntico e a senha também, por conta do operador &&
const naoLoga = usuario === 'Jonathan' || senha === '12345'; // Neste caso o usuário ou a senha precisam ser idênticos para retornar true
console.log(vaiLogar, naoLoga);


console.log(!true); // Operador de negação, como o true foi negado o valor foi invertido e o console retorna false
