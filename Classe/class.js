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