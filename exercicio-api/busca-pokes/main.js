const content = document.querySelector(".content");

async function getPokemons(){
    const count = 30;
    for(let i = 1; i <= count; i++){
        await pesquisaPoke(i);
    }
}

function criaPoke(poke){
    const $div = document.createElement("div");
    const $id = document.createElement("span");
    const $nome = document.createElement("span");
    const $tipo = document.createElement("span");
    const $img = document.createElement("img");

    const id = poke.id;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

    $id.textContent = `#${poke.id}`;
    $id.classList.add("id");

    $nome.textContent = poke.name;
    $nome.classList.add("nome");

    const tipos = poke.types.map(type => type.type.name);
    $tipo.textContent = tipos.join(' | ');


    $img.setAttribute("src", url);

    $div.classList.add("card-poke");
    $div.append($id, $nome, $tipo, $img);
    content.append($div);
}

async function pesquisaPoke(poke){
    await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((data) => data.json())
    .then((poke) => {
        // console.log(poke);
        criaPoke(poke);
    });
}

getPokemons();
