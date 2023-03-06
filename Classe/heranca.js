class Dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado`);
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`);
            return;
        }

        this.ligado = false;
    }
}

/*
    Nesse contexto a classe Smartphone está herdando as informações da classe Dispositivo usando o extends.
    Não tem limite de vezes que isso pode ser feito, mas não é recomendado fazer muitas vezes para não ficar bagunçado e difícil de dar manutenção caso necessário.
*/


class Smartphone extends Dispositivo {
    constructor(nome, cor, modelo){
        super(nome); // Aqui basicamente chamamos o construtor da classe pai e executamos ele aqui dentro para executar todo código pedido anteriormente.
        this.cor = cor; // E aqui estamos adicionando um novo
        this.modelo = modelo;
    }
}

const s1 = new Smartphone("iPhone", "Preto", "15 Plus");
console.log(s1);