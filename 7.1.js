const readlineSync = require("readline-sync");

let randomNum = Math.floor(Math.random() * 100);

let guess = parseInt (readlineSync.question("Guess a number between 0 & 100: "));

while(guess != randomNum){
    if(guess < randomNum){
        guess = parseInt (readlineSync.question("This is too low try again. "))
    }else{
        guess = parseInt (readlineSync.question("This is too high try again. "))
    }
}

console.log("Well done!");