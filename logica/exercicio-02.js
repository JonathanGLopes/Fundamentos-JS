//Ecreva uma função chamada ePaisagem que recebe dois argumentos (largura e altura) de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura) {
  return largura > altura ? true : false;
}

console.log(ePaisagem(1920, 1080));

const aPaisagem = (largura, altura) => {
  if (largura > altura) {
    return true;
  } else {
    return false;
  }
};

console.log(aPaisagem(800, 1920));
