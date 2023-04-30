const content = document.querySelector(".content");
const inputSearch = document.querySelector(".input");
content.classList.add("div");

const containerNomes = document.createElement("div");
containerNomes.classList.add("container");
content.append(containerNomes);

const containerIds = document.createElement("div");
containerIds.classList.add("container");
content.append(containerIds);



let items = [];

inputSearch.oninput = () => {
    content.innerHTML = "";
    items.filter((item) => 
        item.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => addHTML(item));
}

function addNome(item){
    const div = document.createElement("span");
    div.classList.add('nomes');
    div.innerHTML = item;
    containerNomes.append(div);
}

function addId(item){
    const div = document.createElement("span");
    div.classList.add('ids')
    div.innerHTML = item;
    containerIds.append(div);
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        users.forEach((user) => {
            addNome(user.name);
            items.push(user.name);
        });
        users.forEach((id) => {
            addId(id.id);
            items.push(id.id)
        });
    })