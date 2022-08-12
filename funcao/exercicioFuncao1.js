/*
    O time só ganha se tiver pelo menos o dobro da média do outro time, caso contrário ninguém ganha

    1 - Crie uma arrow function 'Calcular média' para calcular a média dos 3 resultados.
    2 - Use a função para calculcar a média dos 2 times.
    3 - Crie a função 'checkVencedor' que pega a média de cada time como parametro (mediaTime1, MediaTime2), 
        e então log o vencedor no console junto com os pontos de vitória de acordo com as regras acima. Exemplo: "Time1 venceu (30 vs 13)".

*/

const calculaMedia = (a, b, c) => (a, b, c) / 3;

const timeLeao = calculaMedia(5, 3, 6).toFixed(0);
const timeTigre = calculaMedia(30, 80, 50).toFixed(0);

function checkVencedor(timeLeao, timeTigre){
    if(timeLeao >= 2 * timeTigre){
        console.log(`O time leão venceu com o placar de (${timeLeao} vs ${timeTigre})`);
    } else if (timeTigre >= 2 * timeLeao){
        console.log(`O time tigre venceu com o placar de (${timeTigre} vs ${timeLeao})`);
    } else {
        console.log("Ocorreu um empate");
    }
}

checkVencedor(timeLeao, timeTigre);
