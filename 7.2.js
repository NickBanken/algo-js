const readlineSync = require("readline-sync");

let n = parseInt (readlineSync.question("tell me how many numbers we should show in a Fibonacci. "));
let result = [0,1];


for(i = 2; i < n; i++){
    if (n === 0){
    }
    else{
        result.push(result[i-2] + result[i-1]);
    }
}

console.log(result);