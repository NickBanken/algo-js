class Circle{
    //This will create the varaibles of this element on creation.
    constructor(xPos, yPos, rad){
        this.xPos = xPos;
        this.yPos = yPos;
        this.rad = rad;
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

//Creates a circle
let circle1 = new Circle(0,0,10);
//log the circle for the first time.
/* console.log(JSON.stringify(circle1) + " " + circle1.xPos + " " + circle1.surface); */
console.log(JSON.stringify(circle1) + circle1.surface);
//Move the circle 2 times over x and 3 times over y. Also resize the circle by 20.
circle1.move(2,3);
circle1.resize(20);

console.log(JSON.stringify(circle1) + " " + circle1.xPos + " " + circle1.surface); 