
const restaurante = {
    localName: 'Classico Italiano',
    location: 'Via Angelo Tavanti',
    categories: ['Italiano', 'Pizzaria', 'Vegetariano', 'Orgânico'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Pão de alho'],
    mainMenu: ['Pizza', 'Macarrão', 'Risotto'],

    OppeningHours: {
        qui: {
            open: 12,
            close: 22,
        },
        sex: {
            open: 11,
            close: 23,
        },
        sab: {
            open: 0,
            close: 24, // Aberto 24h
        },
    },
}

// Usando o mesmo nome da chave na variável para extrair o valor
const {localName, OppeningHours, categories} = restaurante;
console.log(localName, OppeningHours, categories);

//Utilizando outro nome opcional para o valor da chave
const {localName: nomeRestaurante, OppeningHours: horario} = restaurante;
console.log(nomeRestaurante, horario);