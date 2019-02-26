const readlineSync = require("readline-sync");

console.log("What value do you want to calculate the distance between?");

let a = parseInt(readlineSync.question("Please give the start value : "));
let b = parseInt(readlineSync.question("Please give the end value : "));

function calcDistance(a,b){
   return Math.abs(a-b);
}

console.log(calcDistance(a,b));