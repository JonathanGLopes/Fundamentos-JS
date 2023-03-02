class Elf {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        return `${this.name} Attack with ${this.weapon}`
    }
}

const kyle = new Elf('Kyle', 'Ice');
console.log(kyle.attack());

const trevor = new Elf('Trevor', 'Fire');
console.log(trevor.attack());

// A classe tem o mesmo objetivo da função cosntrutora, porém ela veio de uma forma otimizada. Abaixo um exemplo de como fazer o mesmo com a função construtora.
// No exemplo entre ambos podemos ver que a criação do método ataque já está vinculado ao prototype da classe  quando na função construtora é preciso vincular.
// E também ao passar o mouse na função construtora o próprio VScode diz para converter em uma Classe, pois é a versão melhorada.

function Mago(nome, magia){
    this.nome = nome;
    this.magia = magia;
}

Mago.prototype.ataque = function(){
    console.log(`${this.nome} está usando a magia de ${this.magia}`);
}

const mago1 = new Mago("Harry", "Purificação");
mago1.ataque();