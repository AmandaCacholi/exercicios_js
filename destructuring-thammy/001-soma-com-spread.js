array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

// function soma(arr){
//     soma=0
//     for(let i = 0; i < arr.length; i++){
//         soma += arr[i]
//     }
//     return soma
// }
// console.log(soma(array))

function soma(arr){
    let soma = ""
    soma += [...arr].replace(/,/g,"+")

    return console.log(soma)
}
soma(array)