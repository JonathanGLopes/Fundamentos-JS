const valor = 'Global';

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec();


/*
    A função carrega consigo o local onde ela foi definida, então ela vai procurar primeiro dentro do escopo onde ela foi definida, 
    não no local de execução.
*/