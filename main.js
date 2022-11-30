let xBall = 300;
let yBall = 200;
let diameter = 20;
let radius = diameter / 2;

let xBallSpeed = 5;
let yBallSpeed = 5;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    circle(xBall, yBall, diameter)
    xBall += xBallSpeed;
    yBall += yBallSpeed;

    if (xBall + radius > width || xBall - radius < 0) {
        xBallSpeed *= -1;
    }

    if (yBall + radius > height || yBall - radius < 0) {
        yBallSpeed *= -1;
    }
}