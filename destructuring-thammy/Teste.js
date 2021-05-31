const fetch = require('node-fetch')

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
.then((response)=> response.json())
.then((data)=>{
    
    let dezDrinks = [data.drinks[0], data.drinks[1], data.drinks[2], data.drinks[3], data.drinks[4], data.drinks[5], data.drinks[6], data.drinks[7], data.drinks[8], data.drinks[9]] 


    console.log(drinks10)
})

