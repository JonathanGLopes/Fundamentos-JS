const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Verificando se os campos estão preenchidos
    if(nameInput.value === ''){
        alert("Por favor, preencha o seu nome");
        return;
    }

    if(emailInput.value === '' || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha seu email");
        return;
    }

    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ter no mínimo 8 digitos");
        return;
    }

    if(jobSelect.value === ''){
        alert("Por favor, selecione a sua situação");
        return;
    }

    if(messageTextArea.value === ''){
        alert("Por favor, escreva uma mensagem");
        return;
    }

    form.submit();
})

function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true
    }

    return false
}