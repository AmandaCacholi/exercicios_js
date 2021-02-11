//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz 

var numbers = [4, 9, 16, 25];
const squareRoot = numbers.map((each)=>Math.sqrt(each))
console.log(squareRoot)

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.

var numbers2 = [65, 44, 12, 4]
const multiplyBy10 = numbers2.map((each)=>each*10)
console.log(multiplyBy10)

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter

var ages = [32, 33, 16, 40];
const above17 = ages.filter((each)=> each >= 18)
console.log(above17)