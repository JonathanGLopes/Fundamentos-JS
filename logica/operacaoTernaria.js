const pontosUsuario = 999;

// if (pontosUsuario >= 1000){
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário nroaml');
// }

const nivelUsuario = pontosUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);


/*
    No código acima temos em uma linha a mesma funcionalidade do if else comentado, esse é um exemplo de operação ternária para aumentar a produtividade e diminuir linhas de código.
*/