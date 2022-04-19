function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')

/*
    Estrutura while é utilizada quando não sabemos a quantidade de repetições que irá acontecer, quando tem um número indeterminado de repetições é comum utilizar essa forma
     de controle.
     Como no exemplo acima, é gerado um número aleatório e só vai parar quando cair no -1, e não sabemos quando isso irá acontecer, então o while é mais adequado para a situação.
*/