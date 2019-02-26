const readlineSync = require ("readline-sync");

let favNumber = 0;

while(favNumber !== 42){
   favNumber = parseInt(readlineSync.question("enter your favorite number "));
   if(favNumber>50){console.log("That is too high!")
   }
   else if(favNumber!= 42){
    readlineSync.question("Are you sure? ");}
   else if (favNumber == 42){
       console.log("That is also my favorite number! correct!");
   }
}
