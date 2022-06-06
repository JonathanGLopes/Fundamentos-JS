//Capturando evento de submit do formulário
const $form = document.querySelector("#formulario");

$form.addEventListener("submit", function (event){
    event.preventDefault();
    //Capturando o input que irá receber o valor
    const $peso = event.target.querySelector("#peso");
    const $altura = event.target.querySelector("#altura");
    //Capturando o valor do input
    const valorPeso = Number($peso.value);
    const valorAltura = Number($altura.value);

    if(!valorPeso){
        setResultado("Peso inválido", false);
        return;
    }
    /*
    Neste caso o IF só irá ser executado caso o peso e altura não forem válidos, isso por conta do operador de negação !
    E o return irá parar a execução ali caso entre no if, tudo que está abaixo dele não será executado
    */
    if(!valorAltura){
        setResultado("Altura inválida", false);
        return;
    }

    const imc = getImc(valorPeso, valorAltura);
    const getNivelIMC = nivelIMC(imc);

    console.log(imc, getNivelIMC);
});

function nivelIMC(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau3'];

//Quando o if é muito pequeno podemos utilizar ele em uma única linha sem as chaves como está abaixo.
    if(imc >= 39.9) return nivel[5];
    
    if(imc >= 34.9) return nivel[4];
    
    if(imc >= 29.9) return nivel[3];   
    
    if(imc >= 24.9) return nivel[2];
    
    if(imc >= 18.5) return nivel[1];
    
    if (imc < 18.5) return nivel[0];
    
};

//Aqui temos uma função com objetivo de calcular o IMC. E como parâmetros temos o necessário que são o peso e altura, lembrando que é o peso dividido pela altura x2
function getImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid){
    const resultado = document.querySelector(".imc-resultado");
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}