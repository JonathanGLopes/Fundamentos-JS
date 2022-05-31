function meuEscopo(){
    const $form = document.querySelector(".form");
    const $resultado = document.querySelector(".resultado");

    // Foi utilizado $nome = $form para selecionar os inputs no lugar
    // de $nome = document já sabemos onde os inputs estão, então a busca é direto dentro do form
    const pessoas = [];

    function recebeEventoForm (event){
        event.preventDefault();
        const $nome = $form.querySelector(".nome");
        const $sobrenome = $form.querySelector(".sobrenome");
        const $peso = $form.querySelector(".peso");
        const $altura = $form.querySelector(".altura");

        //Abaixo estamos colocando um objeto dentro do array de pessoas para receber o valor insero nos inputs
        // pessoas.push({
        //     nome: $nome.value,
        //     sobrenome: $sobrenome.value,
        //     peso: $peso.value,
        //     altura: $altura.value
        // }); 
        //Pode ser feito como no exemplo acima, já inserir o objeto criado dentro do push ou cria-lo primeiro como feito abaixo

        const funcionarios = {
            nome: $nome.value,
            sobrenome: $sobrenome.value,
            peso: $peso.value,
            altura: $altura.value
        }

        //Aqui inserimos os dados do objeto formularios dentro do array pessoas
        pessoas.push(funcionarios);

        //Aqui damos um console log para ver os objetos criados a partir do que foi inserido no form
        console.log(pessoas);

        //Aqui inserimos os dados na div resultado 
        $resultado.innerHTML += `<p> ${$nome.value} ${$sobrenome.value} ${$peso.value} ${$altura.value} </p>`
    }

    $form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();