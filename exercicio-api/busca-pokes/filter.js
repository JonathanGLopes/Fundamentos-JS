const $searchInput = document.querySelector(".input");
$searchInput.addEventListener("keyup", buscaPokes);

function buscaPokes(){
    const busca = $searchInput.value.toLowerCase();
    const pokes = document.getElementsByClassName("nome");

    for(let i = 0; i < pokes.length; i++){
        const poke = pokes[i];
        const pokeName = poke.textContent.toLowerCase();

        if(pokeName.includes(busca)){
            poke.style.display = 'block';
            poke.parentNode.style.display = 'flex';
        } else {
            poke.parentNode.style.display = 'none';
        }
    }
}