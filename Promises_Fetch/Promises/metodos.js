function espera(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject("Cai no erro");
                return
            }
            resolve(`${msg.toUpperCase()} - Passei pela promise`);
            return
        }, 3000);
    }) 
}


function baixaPagina(){
    const emCache = false;
    if(emCache){
        return Promise.resolve("Página em cache");
    } else {
        return espera("Baixou a página", 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log("ERRO", e));