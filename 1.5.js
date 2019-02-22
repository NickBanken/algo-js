const readlineSync = require("readline-sync");

let number1=readlineSync.question("Give me the first decimal number. ");
let number2=readlineSync.question("Give me the second decimal number. ");


console.log(Math.trunc(number1) * number2);