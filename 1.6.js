const readlineSync = require("readline-sync");

let number1=readlineSync.question("Give me the first integer number. ");
let number2=readlineSync.question("Give me the second integer number. ");
let result= Math.trunc(number1/number2);


console.log("We devided the first intenger with the second, result : "+ result);