const readlineSync = require("readline-sync");




//Create a object that will hold the 
let series = {
    "name": "",
    "productYear": "",
    "castMembers": []
}
//Boolean to keep track if we are asking a series of questions.
let asking = true;


 function askTvSerie(){
    //Ask questions only once.
    series.name=readlineSync.question('What is your favorite serie? ');
    series.productYear=readlineSync.question("What is it's production year? ");

    //Define the index of array
    let i = 0;

    //This while is made to add more crewmembers to the list.
    
    while((asking === true)){
        series.castMembers.push(readlineSync.question("who plays in the movie? "));

        
        console.log(series.castMembers[i]);
        if(series.castMembers[i]!== "")
        {
            i++;
            asking=true;
        }
        else
        {
            series.castMembers.splice(i,1);
            asking=false;
        } 
     }
    return series;
} 


//This will shuffle an array
function shuffle(array) {
    let counter = array.length, temp, index;

// While there are elements in the array
    while (counter > 0) {
// Pick a random index
        index = Math.floor(Math.random() * counter);
// Decrease counter by 1
        counter--;
// And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
   

function action(){
console.log(askTvSerie(series));
shuffle(series.castMembers);
console.log(askTvSerie(series));
}
      
action();