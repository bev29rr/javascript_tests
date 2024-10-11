class Shape {
    constructor (x = 5, y = 10) {
        this.x = x;
        this.y = y;
    }
    moveTo (x, y) {
        this.x = x;
        this.y = y;
    }
}
  
class Ball extends Shape { // Extend is like impl trait
    r = 10;
    constructor (x, y, r) {
        super(x, y); // Calls the parent class
        this.r = r;
    }
    draw () {
        // Variables from parent class are accessible from child class
        console.log(`Drawing ball with centre (${this.x}, ${this.y}) and radius ${this.r}`);
    }
    static thing () { 
        // Static keyword is used for static functions 
        //(standalone functions which don't require initialisation)
        console.log('hi');
    }
}

class SmoothBall extends Ball {
    s = 0;
    constructor(x, y, r, s) {
        super(x, y, r);
        this.s = s;
    }
}

let ball3 = new SmoothBall(5, 10, 0.1);

Ball.thing();
  
let shape = new Shape(5, 6);
console.log(shape.x); // 5
 
let ball = new Ball(20, 30, 5);
console.log(ball.x); // 20
ball.moveTo(30, 40);
console.log(ball.x); // 30
ball.draw();