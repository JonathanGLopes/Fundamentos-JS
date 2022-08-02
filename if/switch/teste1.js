const idade = 15;

if (idade >= 18){
    console.log('Matheus pode tirar sua habilitação');
} else {
    const anosFaltando = 18 - idade;
    console.log(`Matheus é muito novo para dirigir, aguarde ${anosFaltando} anos.`);
}