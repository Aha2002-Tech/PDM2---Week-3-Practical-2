const LEFT = 'a';
const UP = 'w';
const DOWN = 's';
const RIGHT = 'd';

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    fill(255, 0, 0);
    stroke(100);
    rect(150, 150, 100, 100, 100);
    fill(255);
    textSize(32);
    text("Press WASD to move", 50, 50);
    textSize(20);
    text("Welcome to the game!", 50, 80);
    text("it was only for experimental purposes. ignore any messeges on canvas", 100, 100,50);


}

function keyPressed() {
    
    let input = key.toLowerCase();

    switch (input) {
        case LEFT:
            console.log("move left");
            break;
        case UP:
            console.log("move up"); // Fixed logic
            break;
        case DOWN:
            console.log("move down"); // Fixed logic
            break;
        case RIGHT:
            console.log("move right");
            break;
        default:
            console.log("unknown key: ");
    }
}
