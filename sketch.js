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

//racket 2
let xRacket2 = 585;
let yRacket2 = 150;
let racket2Width = 10;
let racket2Height = 90;
let racket2Speed;

//hit (use if you're running bmoren library)
let hit = false;

//points
let myPoints = 0;
let oppPoints = 0;

//sounds
let racketSound;
let scoreSound;
let backgroundSound;

//error chance (vs computer)
//let errorChance = 0;

function preload() {
    racketSound = loadSound("sounds/racket.mp3");
    scoreSound = loadSound("sounds/score.mp3");
    backgroundSound = loadSound("sounds/background.mp3");
}

function setup() {
    createCanvas(600, 400);
    backgroundSound.loop();
}

function showBall() {
    circle(xBall, yBall, diameter);
}

function moveBall() {
    xBall += xBallSpeed;
    yBall += yBallSpeed;
}

function racket1() {
    rect(xRacket1, yRacket1, racket1Width, racket1Height);
}

function racket2() {
    rect(xRacket2, yRacket2, racket2Width, racket2Height);
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
    moveBall();
    borderCollision();
    racket1();
    racket2();
    racket1Move();
    racket2Move();
    //racket1Coll();
    //racket2Coll();
    hitBallRacket(xRacket1, yRacket1);
    hitBallRacket(xRacket2, yRacket2);
    showScore();
    score();
    
}

//you need to click the game screen after play to make it move (p5js editor)
function racket1Move() {
    //87 is the code for pressing down "W"
    if (keyIsDown(87)) {
        yRacket1 -= 10;
    }

    //83 is the code for pressing down "S"
    if (keyIsDown(83)) {
        yRacket1 += 10;
    }
}

function racket2Move() {
    if (keyIsDown(UP_ARROW)) {
        yRacket2 -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yRacket2 += 10;
    }
    
    /* Use this to play alone
    racket2Speed = yBall - yRacket2 - racket2Width / 2 - 30;
    yRacket2 += racket2Speed + errorChance;
    errorChance();
    */
}

/*
function racket1Coll() {
    if (xBall - radius < xRacket1 + racket1Width && yBall - radius < yRacket1 + racket1Height && yBall + radius > yRacket1) {
        xBallSpeed *= -1;
        racketSound.play();
    }
}

//TO-DO racket2Coll();

*/

//library by bmoren

function hitBallRacket(x, y) {
    hit = collideRectCircle(x, y, racket1Width, racket1Height, xBall, yBall, radius);
    if (hit) {
        xBallSpeed *= -1;
        racketSound.play();
    }
}

function showScore() {
    //white line arround everything --> ball, rackets, score box
    stroke(255);
    textSize(16);
    textAlign(CENTER);
    //1st score box color --> orange
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    //my score color
    fill(255);
    text(myPoints, 170, 26);
    //2nd score box color --> orange
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    //opponent score color
    fill(255);
    text(oppPoints, 470, 26)
}

function score() {
    if (xBall > 590) {
        myPoints += 1;
        scoreSound.play();
    }

    if (xBall < 10) {
        oppPoints += 1;
        scoreSound.play();
    }
}

/*
function computerErrorChance() {
    if (oppPoints >= myPoints) {
        errorChance += 1;
        if (errorChance >= 39) {
            errorChance = 40;
        }
    } else {
        errorChance -= 1;
        if (errorChance <= 35) {
            errorChance = 35;
        }
    }
}
*/