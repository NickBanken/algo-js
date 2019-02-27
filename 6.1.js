class Circle{
    //This will create the varaibles of this element on creation.
    constructor(xPos, yPos, rad){
        this.xPos = xPos;
        this.yPos = yPos;
        this.rad = rad;
    }
    //setting all position of circle. can de defined later on.
    get xPosit(){
        return this.xPos[0];
    }

    set xPosit(value){
        this.xPos[0]= value;
    }

    get yPosit(){
        return this.yPos[0];
    }

    set yPosit(value){
        this.yPos[0]= value;
    }

    get radius(){
        return this.rad[0];
    }

    set radius(value){
        this.rad[0]= value;
    }
    //++++Functions to move and resize the element.++++
    move(xOffset, yOffset){
        this.xPos = xOffset;
        this.yPos = yOffset;
    }

    resize(radius){
        this.rad=radius;
    }
    //****calculation of the surface****/
    get surface() {
        return this.rad*this.rad * Math.PI;
    }
}

console.log(Circle.name);
//Creates a circle
let circle1 = new Circle(222,0,10);
//log the circle for the first time.
console.log(JSON.stringify(circle1) + " " + circle1.xPos + " " + circle1.surface);
//Move the circle 2 times over x and 3 times over y. Also resize the circle by 20.
/* circle1.move(2,3);
circle1.resize(20);

console.log(circle1+""+circle1.surface); */