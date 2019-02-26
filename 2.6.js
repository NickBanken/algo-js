const readlineSync = require ("readline-sync");

let dayNumber = 0;


while(dayNumber>7 || dayNumber<1){
    dayNumber = parseInt(readlineSync.question("number "));
    
    if(dayNumber == 1){
        console.log("It is Monday!");
    }
    else if(dayNumber == 2){
        console.log("It is Tuesday!");
    }
    else if(dayNumber ==3){
        console.log("It is Wednesday!");
    }
    else if(dayNumber ==4){
        console.log("It is Thursday!");
    }
    else if(dayNumber ==5){
        console.log("It is Friday!");
    }
    else if(dayNumber ==6){
        console.log("It is Saturday!");
    }
    else if(dayNumber ==7){
        console.log("It is Sunday!");
    }
    else if(dayNumber>7 || dayNumber<1){
        console.log("error!");
    }
}

