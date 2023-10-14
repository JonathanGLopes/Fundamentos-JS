"strict mode";

const { func } = require("prop-types");

//Com funções nós podemos criar códigos reutilizáveis ao invés de escreve-los manualmente novamente

function log() {
  console.log("Meu nome é Jonathan");
}
// Chamar / Invocar / Rodar a função
log();

function cortaFrutas(fruta) {
  return fruta * 4;
}

//Aqui nós vamos chamar a função cortaFruta dentro da função frutas
function frutas(laranjas, acerolas) {
  const pedacoLaranja = cortaFrutas(laranjas);
  const pedacoAcerola = cortaFrutas(acerolas);

  console.log(laranjas, acerolas);
  const suco = `Suco com ${pedacoLaranja} pedaços de laranjas e ${pedacoAcerola} pedaços de acerolas.`;
  return suco;
}

console.log(frutas(3, 2));

// Função retornando outra função
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonathan");
greeterHey("Carlos");

greet("Olá")("Carlos");

const greeArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greeArr("Olá")("Jonathan");
