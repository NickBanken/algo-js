const readlineSync = require("readline-sync");
let calculate = 0;
let result = [];
let correct = false;



let x = parseInt(readlineSync.question("Please give a prime number."))


for(let i = 2; i < x; i++){
    calculate = x/i;
      if(Number.isInteger(calculate)){
          result.push(calculate);
          correct = true;
      }
    }



console.log(result);

