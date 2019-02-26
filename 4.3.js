const readlineSync = require("readline-sync");

// We ask the user how many random numbers should be generated.
let n = parseInt(readlineSync.question("How many numbers do you wany? ")); 
// Empty array that will be filled later on.
let arr=[];

// This function will make a random number between 0 - max. We can define this later.
function rand10(max){
    return Math.floor(Math.random() * Math.floor(max));
}

// This function will push a array, with random numbers between 1-10.
function multirand(n){
    arr.push(rand10(10))
}


// we call the multirand function to repeat the push.
for( i = 0; i < n; i++){
    multirand(n);
}



console.log(arr);