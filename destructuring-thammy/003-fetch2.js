const fetch = require('node-fetch')

// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
// .then((response)=>response.json())
// .then((data)=>{
//     let listaNomes = []
//     for(let i = 0;i<10;i++){
//         listaNomes.push(data.meals[i].strMeal)
//     }
//     console.log(listaNomes)
// })

async function fetchNames(url){
    const response = await fetch(url);
    const data = await response.json();

    let listaNomes = []
    for(let i = 0; i<10; i++){
        listaNomes.push(data.meals[i].strMeal)
    }
    return console.log(listaNomes);
}
fetchNames('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')