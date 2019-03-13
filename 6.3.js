class Rectangle{

    constructor(topLeftPosX,topLeftPosY, wid, heig){
        this.topLeftPosX = topLeftPosX;
        this.topLeftPosY = topLeftPosY;
        this.wid = wid;
        this.heig = heig;
    }


    
    collides(newRec){
        if( (this.topLeftPosX                   <= newRec.topLeftPosX &&
            this.topLeftPosX + this.wid         >= newRec.topLeftPosX)||
            (this.topLeftPosX                   <= newRec.topLeftPosX + newRec.wid &&
            this.topLeftPosX + this.wid         >= newRec.topLeftPosX + newRec.wid) &&

            (this.topLeftPosY                   <= newRec.topLeftPosY&&
            this.topLeftPosY + this.heig        >= newRec.topLeftPosX) ||
            (this.topLeftPosY                   <= newRec.topLeftPosY + newRec.heig &&
            this.topLeftPosY + this.heig        >= newRec.topLeftPosY + newRec.heig)
        ){
            return true;
        }else{
            return false;
        }
    }
}




    /* rectangle1 = new Rectangle(0,0,40,30);
    rectangle2 = new Rectangle(40,20,20,30);
    rectangle3 = new Rectangle(50,50,10,10);
 */

 function generateNew(n){
    let rectangle;
    for(i=0; i<1000 ; i++){

        rectangle[i] = new Rectangle(Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000));
    }
    return generateNew;
}

    generateNew();


    if(rectangle[i].collides(rectangle[i])){
        console.log("I collide");
    }
    else{
        console.log("I don't.")
    }
    
