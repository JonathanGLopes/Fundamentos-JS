const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Quadro de honra')
            break
        
        case 8: case 7:
            console.log('Aprovado')
            break
        
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(2)
imprimirResultado(5)
imprimirResultado(10)

/*
    Utilizar estrutura de controle com switch é semelhante ao if/else, com o case sendo a condição e logo em seguida dele temos a resposta. No entanto nele colocamos o break 
    para caso bater com a condição o código parar ali e não executar o restante.
    Exemplo: case 5: case 8: (se for 5 ou se for 7) = devolve algo
*/