'strict mode';

//Com funções nós podemos criar códigos reutilizáveis ao invés de escreve-los manualmente novamente

function log(){
    console.log("Meu nome é Jonathan");
}
// Chamar / Invocar / Rodar a função
log();

function frutas(laranjas, acerolas){
    console.log(laranjas, acerolas);
    const suco = `Suco com ${laranjas} laranjas e ${acerolas} acerolas.`;
    return suco;
}

const sucoFrutas = frutas(5, 3);
console.log(sucoFrutas);

