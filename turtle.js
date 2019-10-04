let north = "north";
let south = "south";
let east = "east";
let west = "west";

class Turtle {
    constructor(x, y){
    this.x = x;
    this.y = y;
    this.turtle = east;
    this.pathLog = [];
    this.pathX = 0;
    this.pathY = 0;
    this.xArray = [];
    this.yArray = [];
    this.grid = ``;
    }
    forward(num) {
        if (this.pathLog.length == 0) {
            this.pathX = this.x;
            this.pathY = this.y;
            this.pathLog.push([this.pathX, this.pathY]);
            this.xArray.push(this.pathX);
            this.yArray.push(this.pathY);
        }
        if (this.turtle == east) {
        for (let i = 0; i < num; i++){
            this.pathX =  this.pathX + 1;
            this.pathLog.push([this.pathX, this.pathY]);
            this.xArray.push(this.pathX);
        }
        return this;
    }
        else if (this.turtle == west) {
        for (let j = 0; j < num; j++) {
            this.pathX = this.pathX - 1;
            this.pathLog.push([this.pathX, this.pathY]);
            this.xArray.push(this.pathX);
        }
        return this;
    }
        else if (this.turtle == north) {
        for (let k = 0; k < num; k++) {
            this.pathY = this.pathY + 1;
            this.pathLog.push([this.pathX, this.pathY]);
            this.yArray.push(this.pathY);
        }
        return this;
    }
        else if (this.turtle == south) {
        for (let l = 0; l < num; l++){
            this.pathY = this.pathY - 1
            this.pathLog.push([this.pathX, this.pathY]);
            this.yArray.push(this.pathY);
        }
        return this;
    }
    return this.pathLog;
}
    right() {
        if (this.turtle == east) {
            this.turtle = south;
        }
        else if (this.turtle == south) {
            this.turtle = west;
        }
        else if (this.turtle == west) {
            this.turtle = north;
        }
        else if (this.turtle == north) {
            this.turtle = east;
        }
        return this;
}
    left() {
        if (this.turtle == east) {
            this.turtle = north;
        }
        else if (this.turtle == north) {
            this.turtle = west;
        }
        else if (this.turtle == west) {
            this.turtle = south;
        }
        else if (this.turtle == south) {
            this.turtle = east;
        }
        return this;
}
    allPoints() {
        console.log(this.pathLog);
    }
    print() {
        let xMax = Math.max(...this.xArray);
        let xMin = Math.min(...this.xArray);
        let yMax = Math.max(...this.yArray);
        let yMin = Math.min(...this.yArray);
        let xPlane = Math.abs(xMin - xMax) + 1;
        let yPlane = Math.abs(yMin - yMax) + 1;

        function isArrayInArray(arr, item){
            let stringItem = JSON.stringify(item);
            let contains = arr.some(function(ele){
                return JSON.stringify(ele) === stringItem;
            });
        return contains;
        }
        for (let y = yMax; y >= yMin; y--){
            for (let x = xMin; x <= xMax; x++) {
                let item = [x,y];
                if (isArrayInArray(this.pathLog, item)){
                this.grid += '■';
                }
                else {this.grid += '□';}
            }   
        this.grid += "\n";
        }
    console.log(this.grid);
    return this;
}
}
const turtle1 = new Turtle(0,0);
turtle1.forward(3)
.left()
.forward(3)
.right()
.forward(5)
.right()
.forward(8)
.right()
.forward(5)
.right()
.forward(3)
.left()
.forward(3)
.print();
