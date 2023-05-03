


function gerarGif(dados){
    const min = 0;
    const max = 24;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const input = document.querySelector(".input").value;
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=Q8KLGbg727Bo8PdC0bXs2Dx5Jq596ZBQ&q=${input}&limit=25&offset=0&rating=g&lang=en`;
    const container = document.querySelector(".container");
    const gifArea = document.querySelector(".gif");

    fetch(apiURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(dados) {
        console.log(dados);
        const imagens = dados.data.map(img => img.images);
        imagens.forEach(imagem => {
            const criaImg = document.createElement("img");
            const criaA = document.createElement("a");
            criaA.setAttribute("href", imagem.original.url);
            criaImg.setAttribute("src", imagem.original.url);
            criaA.appendChild(criaImg);
            gifArea.appendChild(criaA);
            console.log(imagem)
        });
    })
    .catch(function(erro){
        console.log(erro);
    })
}

document.querySelector(".botao").addEventListener("click", campoVazio);

function campoVazio(){
    const input = document.querySelector(".input").value;
    if(input === ''){
        document.querySelector(".erro").textContent = "Campo vazio! Insira um nome";
        return;
    } else {
        document.querySelector(".erro").textContent = "";
    }
}
