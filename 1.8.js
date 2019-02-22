const readlineSync = require("readline-sync");
let count=4;


let name=readlineSync.question("What is your name? "+count+" questions left! ");
count-=1;
let color=readlineSync.question("What is your favorite color? "+count+" questions left! ");
count-=1;
let toy=readlineSync.question("Your favorite toy, think WIDELY! "+count+" questions left ;) ! ")
count-=1;
let hateMost=readlineSync.question("Who do you hate the most? Are you always this boring? "+count+" questions left!");
count-=1;
let meal=readlineSync.question("favorite meal? "+count+" questions left! -_- ");






console.log("------------------------------------------------------------------------------")
console.log("------------------------------------------------------------------------------")

console.log("There once was a person named "+name+". This person is madly inlove with "+hateMost+". But at one night right before they entered the bedroom, DUN DUN DUUUUUN. The "+meal+" was scattered over the floor. YOU, yes you, It is obviously about you since you awnsered my questions. *ahem*. You find a "+color+" "+toy+" near the "+meal+". "+hateMost+" was eating "+meal+" with the "+toy+" and choked to death. For some reason you are filled with joy and end the story here.");

console.log("------------------------------------------------------------------------------")
console.log("------------------------------------------------------------------------------")