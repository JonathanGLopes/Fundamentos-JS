const elementos = ['João', 'Maria', 'José', 'Eva', 'Marcos'];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
    let criaP = document.createElement("p");
    criaP.innerText = `Meu nome é: ${elementos[i]}`;
    div.appendChild(criaP);
}

container.appendChild(div);



// Exemplo

// const elementos = [
//     {tag: 'p', texto: 'Frase 1'},
//     {tag: 'div', texto: 'Frase 2'},
//     {tag: 'section', texto: 'Frase 3'},
//     {tag: 'footer', texto: 'Frase 4'},
// ];




// for (let i = 0; i < elementos.length; i++){
//     let {tag, texto} = elementos[i];
//     let tagCriada = document.createElement(tag);
//     tagCriada.innerText = texto;
//     div.appendChild(tagCriada);
// }

// container.appendChild(div);