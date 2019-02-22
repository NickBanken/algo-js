const readlineSync = require("readline-sync");

let shoeSize=readlineSync.question("What is your shoe size? ");
let bornYear=readlineSync.question("What year were you born? ");

let result= (((shoeSize * 2) +5)*50)-bornYear+1766;




console.log(result);