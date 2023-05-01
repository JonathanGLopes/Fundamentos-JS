


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
        const imgPath = dados.data[randomNum].images.original.url;
        const img = document.createElement("img");
        img.setAttribute("src", imgPath);
        gifArea.append(img);
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
