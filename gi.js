const readlineSync = require("readline-sync");

let a = (readlineSync.question('give name of the TV-serie : '));
let b = (readlineSync.question('give the production year : '));
let c = (readlineSync.question('give name of cast member_1: '));
let d = (readlineSync.question('give name of cast member_2: '));
let e = (readlineSync.question('give name of cast member_3: '));
let TvSerie = {
    "name": a,
    "prodYear": b,
    "namesCast": {
        "nameCast1": c,
        "nameCast2": d,
        "nameCast3": e
    }
}

function shuffle(sourceArray){
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

shuffle(TvSerie.namesCast);

console.log(TvSerie.namesCast);