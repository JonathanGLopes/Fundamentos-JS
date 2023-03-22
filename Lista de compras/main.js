const $novoProduto = document.querySelector(".add");
const $modal = document.querySelector(".modal");
const $closeModal = document.querySelector(".fechar");
const $inputItem = document.querySelector(".item");

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