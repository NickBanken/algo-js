let counter = 0;
let tracker =0;

while(counter<100){
    counter+=1;
    if(counter%2===0){
        tracker=counter/2;
        console.log("This number is even "+tracker);
    }
    else{
        tracker=counter*3;
        console.log("This number is odd "+tracker);
    }
}