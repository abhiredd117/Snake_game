var s ;
var food;
var scale = 20
var score = 0; // initialize score variable

function setup() {
  createCanvas(600, 600);
  canvas.style.border = "10px solid black";
  //s = new Snake();
  frameRate(10);  // rate of snake movement 

}

function draw() {
  background(255, 204, 0);

  //display score
  textSize(24);
  fill(255);
  text("Score: " + score, 10, 30);
}
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1); 
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
