const sequencia = {
    _valor: 1, // O _ no início do nome é uma boa prática para indicar que o valor desse objeto sequencia é para ser acessado apenas internamente
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000;

console.log(sequencia.valor, sequencia.valor)
