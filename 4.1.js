const readlineSync = require("readline-sync");

//Ask user for height and width.
let width = readlineSync.question("Please give me the width of the rectangle. ");
let height = readlineSync.question("Please give me the height of the rectangle. ");

//Function to calculate the surface.
function calcSurface(width,height){
return width*height;
};

console.log(calcSurface(width,height));