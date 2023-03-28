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

async function executa(){
    try{
        const fase1 = await espera('Fase 1', 1000);
        console.log(fase1);

        const fase2 = await espera('Fase 2', 2000);
        console.log(fase2);

        const fase3 = await espera('Fase 3', 3000);
        console.log(fase3);

        console.log('Fases finalizadas!');
    }
        catch(e){
            console.log(e);
        }
}

executa()