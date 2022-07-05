//Escreva uma função que recebe 2 número e retorne o maior deles.

function doisNumeros(num1, num2){
    return Math.max(num1, num2);  //A função Math.max retorna o maior de um ou mais números
}

console.log(doisNumeros(1,5));

//Outras soluções

function max(x, y){
    if(x > y){
        return x;
    } else {
        return y;
    }
}
console.log(max(2, 8));

const max2 = (x, y) => x > y ? x : y;  // Operação ternária

console.log(max2(10, 5));
