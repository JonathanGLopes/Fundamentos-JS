function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000); // Tempo que irá chamar o console log passado em ms

setTimeout(() => {
    clearInterval(timer);
}, 5000); // SetTimeout tem o objetivo de parar o setInterval, aqui passamos o tempo que desejamos parar após o inicio