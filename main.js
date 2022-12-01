//ball
let xBall = 300;
let yBall = 200;
let diameter = 20;
let radius = diameter / 2;

//ball speed
let xBallSpeed = 5;
let yBallSpeed = 5;

//racket 1
let xRacket1 = 5;
let yRacket1 = 150;
let racket1Width = 10;
let racket1Height = 90;


function setup() {
    createCanvas(600, 400);
}

function showBall() {
    circle(xBall, yBall, diameter);
}

function movBall() {
    xBall += xBallSpeed;
    yBall += yBallSpeed;
}

function racket1 () {
    rect(xRacket1, yRacket1, racket1Width, racket1Height);
}

function borderCollision() {
    if (xBall + radius > width || xBall - radius < 0) {
        xBallSpeed *= -1;
    }

    if (yBall + radius > height || yBall - radius < 0) {
        yBallSpeed *= -1;
    }
}

function draw() {
    background(0);
    showBall();
    movBall();
    borderCollision();
    racket1();
}