// Game state variables
const START = 0;
const PLAYING = 1;
const WIN = 2;
const DIED = 3;
// Set the start state
let state = START;

// The JSDoc on the next line enables auto completion
/** @type {Player} */
let thePlayer;

function setup() {
    createCanvas(800, 600);
    thePlayer = new Player();
}

function draw() {
    background(255);
    drawStart();
    thePlayer.draw();
    thePlayer.move();
    drawWin();
    drawDied();
            switch(state) {
        case START:
            drawStart();
            break;
        case PLAYING:
            thePlayer.move();
            thePlayer.draw();
            break;
        case WIN:
            drawWin();
            break;
        case DIED:
            drawDied();
            break;
    }
}
class Player {
    constructor() {
        this.x = 400;
        this.y = 300;
        this.xSpeed = 0;
        this.size = 20;
    }
    move() {
        this.x += this.xSpeed;
        
        this.x = constrain(this.x, 0, width);
    }
    draw() {
        fill(0, 0, 255); 
        ellipse(this.x, this.y, this.size);
    }
    setXSpeed(s) {
        this.xSpeed = s;
    }
    
    reset() {
        this.x = 400;
        this.y = 300;
    }         

}
function keyPressed() {

    switch(keyCode) {

        case LEFT_ARROW:
            thePlayer.setXSpeed(-5);
            break;
        case RIGHT_ARROW:
            thePlayer.setXSpeed(5);
            break;
        case ENTER:
            console.log("Enter pressed");
            break;
    }
const Start = 'a';
const Win = 'w';
const Died = 's';
    switch (state){
        case START:
            console.log("starting game");
            break;
            case WIN: 
            console.log("you win");
            break;
            case DIED:
            console.log("you died");
            break;  
        
    }
}
function keyPressed() {
    if (keyCode === ENTER) {
        if (state === START || state === WIN || state === DIED) {
            thePlayer.reset();
            state = PLAYING; 
        }
    }

    
    if (state === PLAYING) {
        switch(keyCode) {
            case LEFT_ARROW:
                thePlayer.setXSpeed(-5);
                break;
            case RIGHT_ARROW:
                thePlayer.setXSpeed(5);
                break;
        }
    }
}



function keyReleased() {
    switch(keyCode) {
        case LEFT_ARROW:
        case RIGHT_ARROW:
            thePlayer.setXSpeed(0);
            break;
            default:
            console.log("unknown key released: " + key);
    }
}


/**
 * Draw the background of the scene
 */
function drawSceneBackground() {
    stroke(255, 0, 0);
    noFill();
    rect(100, 100, 600, 400);
    fill(255, 0, 0);
    textSize(32);
}


/**
 * Draw the start scene
 */
function drawStart() {
    drawSceneBackground();
    text("Start game", 150, 150);
    textSize(20);
    text("Play well to win", 150, 200);
    text("Press Enter to start", 150, 300);
}


/**
 * Draw the game over scene - win condition
 */
function drawWin() {
    drawSceneBackground();
    text("You win!", 150, 150);
    text("Press Enter to play again", 150, 350);
}


/**
 * Draw the game over scene - lose condition
 */
function drawDied() {
    drawSceneBackground();
    text("You died :(", 150, 150);
    text("Press Enter to play again", 150, 350);
}