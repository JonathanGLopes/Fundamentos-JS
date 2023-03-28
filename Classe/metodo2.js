class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
    
    falar() {
      console.log("Olá, meu nome é " + this.nome);
    }
    
    andar() {
      console.log(this.nome + " está caminhando.");
    }
  }
  
  let joao = new Pessoa("João", 30);
  joao.falar(); // Olá, meu nome é João
  joao.andar(); // João está caminhando.

  /*
  Neste exemplo, a classe "Pessoa" possui um construtor que recebe dois parâmetros, "nome" e "idade". Os métodos "falar" e "andar" são definidos na classe e podem ser usados em instâncias da classe criadas usando a palavra-chave "new". 
    A instância "joao" da classe "Pessoa" é criada com os valores "João" e 30 passados ​​para o construtor e, em seguida, os métodos "falar" e "andar" são chamados em "joao" usando a notação de ponto.
  */
  