const a = 1;
const b = 2;
const c = 3;

const obj1 = {a, b, c};
console.log(obj1)

const nomeAttr = 'Nota';
const valorAttr = 7.87;

const obj2 = {[nomeAttr]: valorAttr};
console.log(obj2)

const obj3 = {
    //Forma tradicional
    funcao1: function() {
        //conteudo..
    },
    //Forma reduzida
    funcao2(){
        //conteudo..
    }
}

console.log(obj3)