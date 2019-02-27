const readlineSync = require("readline-sync");

let a = parseInt(readlineSync.question("What value do you want to calculate if fuctorial of? "));

//Create formula to calculate the factorial number of ().
function factorial(n){
    // if the value is not 1. Multiply the value by the value - 1. Do this untill 1;

   /* return (n != 1) ? n * factorial(n - 1) : 1; */
   
   // second formula, does the same.
   if (n === 1) {
       return 1;
   }
   return n * factorial(n - 1);
}

console.log(factorial(a));