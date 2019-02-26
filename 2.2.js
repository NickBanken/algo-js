const readlineSync = require("readline-sync");

let min=parseInt(readlineSync.question("Enter a min number. "));
let max=parseInt(readlineSync.question("Enter a max number. "));

if((min>max)){
    console.log("ERROR! I could not register any sense in you.");
    }
    else{
        let current=parseInt(readlineSync.question("Enter your current. "));
        
        if ((current>min)&&(current<max)){
        console.log("We are in the middle!");
        }
        else if((current< min)||(current>max)){
            console.log("This is just wrong...");
        }
    }


