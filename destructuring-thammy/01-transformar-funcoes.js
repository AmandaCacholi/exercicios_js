//Transforme as funções declarativas abaixo em Arrow Functions

// const upperName = function (name) {
//     return name.toUpperCase();
//   };
//   function myFunction(p1, p2) {
//     return p1 * p2;
//   }
//   function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
// }

const upperName = (name) => {return name.toUpperCase()}

const myFunction = (p1, p2) => {return p1 * p2}

const toCelsius = (fahrenheit) => {return (5/9)*(fahrenheit-32)}

console.log(upperName("amanda"))
console.log(myFunction(5,2))
console.log(toCelsius(20))