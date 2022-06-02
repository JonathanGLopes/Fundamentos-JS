/*
    Entre 0 - 11 = Bom dia
    Entre 12 - 17 = Boa tarde
    Entre 18 - 23 = Boa noite
*/

// O If pode ser usado sozinho com apenas uma condição
// Sempre que o Else for utilizado, precisa de um if antes dele
// Podemos ter vários else if na checagem
// No entanto só podemos ter um único else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 10;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');
}else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
}else {
    console.log('Olá, estamos com erro no sistema');
}