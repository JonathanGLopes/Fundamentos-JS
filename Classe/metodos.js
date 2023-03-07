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

    // O método estático está associado a classe em si ao invés de estar associado a uma instância específica da classe.
    // É o mesmo que executar uma função dentro da classe, porém com o método o this já aponta para classe em questão.
    static manutencao(){
      console.log("A manutenção do veículo precisa ser feita!");
    }
  }
  
  const meuCarro = new Carro('Ford', 'Mustang', 2020);
  meuCarro.apresentar(); 
  meuCarro.dirigir();  // E aqui estamos chamando o método instânciado, a partir do que foi criado pela classe.
  meuCarro.parar(); 
  
  Carro.manutencao(); // Para chamar o método estático vamos direto na classe, pois ele não está associado a instância (objeto criado a partir da clase)