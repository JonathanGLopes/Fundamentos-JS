function saudacao(msg){
  return new Promise((resolve, reject) => {
      if(typeof msg !== 'string'){
        reject("Erro: A mensagem não pode ser um número")
        return
      }
      resolve("Saudação enviada!");
  })
    .then(valor => {
      console.log(valor);
    })
    .then(function(){
      console.log("Segundo then enviado.");
    })
    .catch(erro => {
      console.log(erro);
    })
}

saudacao('Olá');
saudacao(2023);