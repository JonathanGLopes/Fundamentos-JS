// Função em JS é First class object (Citizen)

//Possibilidades com a função

//Criando de forma literal
function fun1() {}

//Armazenando em uma varivável 
const fun2 = function () {}

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar função como parâmetro
function run(fun){
    fun()
}

run(function () { console.log('Executando...') })