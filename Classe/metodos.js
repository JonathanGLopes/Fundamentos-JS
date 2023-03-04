class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    apresentar() {
      console.log(`Este é um ${this.marca} ${this.modelo} fabricado em ${this.ano}.`);
    }
  
    dirigir() {
      console.log(`O ${this.modelo} está agora em movimento.`);
    }
  
    parar() {
      console.log(`O ${this.modelo} agora parou de se mover.`);
    }
  }
  
  const meuCarro = new Carro('Ford', 'Mustang', 2020);
  meuCarro.apresentar(); 
  meuCarro.dirigir(); 
  meuCarro.parar(); 
  