//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const [item,...resto1] = arr;
const [item1,...resto2] = arr2
console.log(resto1)
console.log(resto2)