//Essa parte é chamada de estrutura de controle

const idade = 15;

if (idade >= 18){
    console.log('Matheus pode tirar sua habilitação');
} else {
    const anosFaltando = 18 - idade;
    console.log(`Matheus é muito novo para dirigir, aguarde ${anosFaltando} anos.`);
}


const peso = 70;
const altura = 1.85;
const IMC = peso / (altura ** 2);

if (IMC <= 22){
    console.log("Está tudo okay");
} else {
    console.log("Acima do peso");
}