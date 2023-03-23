const $novoProduto = document.querySelector(".add");
const $modal = document.querySelector(".modal");
const $closeModal = document.querySelector(".fechar");
const $inputItem = document.querySelector(".item");
const $lista = document.querySelector(".lista");
const $addProduto = document.querySelector(".add_item");
const form = document.querySelector("form");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    isValid();
})

function isValid(){
    if($inputItem.value === '') {
        document.querySelector("span").style.visibility = "visible";
        $inputItem.focus();
        return;
    } else {
        newLi();
        addAndClose();
    }
}

function addAndClose(){
    $modal.style.display = 'none';
    $novoProduto.classList.remove('desabilitado');
}

function newLi(){  
    const li = document.createElement('li');
    li.textContent = $inputItem.value;
    $lista.appendChild(li);

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-delete-left", "lixo");
    li.appendChild(icon);
    $inputItem.value = '';
    $inputItem.focus();
    document.querySelector("span").style.visibility = "hidden";
}


function showModal() {
    $novoProduto.addEventListener("click", () => {
        $modal.style.display = "block";
        $novoProduto.classList.add("desabilitado");
        $inputItem.focus();
    })

    closeModal();
}

function closeModal(){
    $closeModal.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "none";
        $novoProduto.classList.remove("desabilitado");
    })
}

showModal();