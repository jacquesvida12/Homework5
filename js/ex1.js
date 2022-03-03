class square {
    constructor(side){
    this.side = side;
    this.perimeter = side * 4;
    this.area = side * side;
    this.diagonol = Math.sqrt((2*(side * side)));
    }
    describe() {
        return `Square with side ${this.side} has perimeter of ${this.perimeter}, area of ${this.area}, and diagnol of ${this.diagonol}`;
    }
}

const square1 = new square(Number(2));
const square2 = new square(Number(6));
const square3 = new square(Number(4));

console.log(square1.describe());
console.log(square2.describe());
console.log(square3.describe());