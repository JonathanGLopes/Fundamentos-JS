// 1 - A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
// 2 - Mostre no console quantos produtos tem nessa lista.
// 3 - Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
// 4 - Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
// 5 - Remova o segundo item da sua lista.




//Listando os itens
const itens = ['Computador', 'Telefone', 'Mouse', 'Teclado'];
console.log(`Quantidade de produtos: ${itens.length}`);

//Listando os itens sem o Mouse
console.log(`Removendo o Mouse da lista: ${itens.filter(item => item !== 'Mouse')}`)


// Realizando a busca
const findItens = itens.find(item => item === 'Telefone');

if(findItens){
    console.log(`O item ${findItens} existe na lista!`);
} else {
    console.log(`O produto não existe na lista`);
}


//Removendo o segundo item da lista
itens.splice(1, 1);
console.log(`Os itens presentes são: ${itens}`);