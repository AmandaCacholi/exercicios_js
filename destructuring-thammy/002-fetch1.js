const fetch = require('node-fetch')

fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then((response)=> response.json())
.then((data)=>{
    console.log(`id: ${data.meals[0].idMeal}`)
    console.log(`Name: ${data.meals[0].strMeal}`)
    console.log(`Area: ${data.meals[0].strArea}`)
    console.log(`ingredients: ${data.meals[0].strIngredient1}, ${data.meals[0].strIngredient2}, ${data.meals[0].strIngredient3}, ${data.meals[0].strIngredient4}, ${data.meals[0].strIngredient5}, ${data.meals[0].strIngredient6}, ${data.meals[0].strIngredient7}, ${data.meals[0].strIngredient8} and ${data.meals[0].strIngredient9}`)
    console.log(`Instructions: ${data.meals[0].strInstructions}`)
})