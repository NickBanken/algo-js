const readlineSync = require ("readline-sync");

let n = 0;
let total=0;
let count=0;

n = new Number(readlineSync.question("Give me a number "));

total = n;
n = 0;

while(count != total){
    
    n = n+new Number(readlineSync.question("Lets count new numbers "));
    count++;
}

console.log(n+" is your number");


