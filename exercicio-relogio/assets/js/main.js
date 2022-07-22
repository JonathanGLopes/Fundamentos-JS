function meuRelogio(){
  function criaHora(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }
  
  
  const relogio = document.querySelector(".relogio");
  const inicia = document.querySelector(".iniciar");
  const pausa = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let segundos = 0;
  let timer;
  
  function iniciaRelogio(){
      timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = criaHora(segundos);
    }, 1000);
  }
  
  
  inicia.addEventListener("click", () =>{
      clearInterval(timer);
      iniciaRelogio();
      relogio.classList.remove("pausado");
  });
  
  pausa.addEventListener("click", () => {
      clearInterval(timer);
      relogio.classList.add("pausado");
  });
  
  zerar.addEventListener("click", () =>{
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      segundos = 0;
      relogio.classList.remove("pausado");
  });
}

meuRelogio();