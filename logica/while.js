/* O while é utilizado quando não sabemos a quantidade de repetições necessária para alcançar o resultado. No exemplo abaixo precisamos chegar no número 10, mas não sabemos
quantas vezes será necessário ocorrer o loop até cair nele. */

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while(rand !== 10){ //Enquanto o rand for diferente de 10, ele vai continuar o laço
    rand = random(min, max);
    console.log(rand);
}