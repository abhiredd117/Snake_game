// Snake Game in p5.js

// Variables
let snake = [];
let food;
let width = 400;
let height = 400;
let speed = 5;
let score = 0;

// Setup
function setup() {
  createCanvas(width, height);
  background(255);
  snake.push([width / 2, height / 2]);
  food = createVector(random(width), random(height));
}

// Draw
function draw() {
  // Clear the canvas
  background(255);

  // Draw the snake
  for (let i = 0; i < snake.length; i++) {
    fill(0);
    rect(snake[i][0], snake[i][1], 20, 20);
  }

  // Draw the food
  fill(255, 0, 0);
  rect(food.x, food.y, 20, 20);

  // Check for collision with food
  if (snake[0][0] == food.x && snake[0][1] == food.y) {
    score++;
    food = createVector(random(width), random(height));
    snake.push(snake[snake.length - 1]);
  }

  // Check for collision with walls
  if (snake[0][0] < 0 || snake[0][0] >= width || snake[0][1] < 0 || snake[0][1] >= height) {
    gameOver();
  }

  // Check for collision with itself
  for (let i = 1; i < snake.length; i++) {
    if (snake[0][0] == snake[i][0] && snake[0][1] == snake[i][1]) {
      gameOver();
    }
  }

  // Move the snake
  snake[0][0] += speed * direction.x;
  snake[0][1] += speed * direction.y;

  // Update the direction
  if (keyCode == UP) {
    direction.y = -1;
    direction.x = 0;
  } else if (keyCode == DOWN) {
    direction.y = 1;
    direction.x = 0;
  } else if (keyCode == LEFT) {
    direction.y = 0;
    direction.x = -1;
  } else if (keyCode == RIGHT) {
    direction.y = 0;
    direction.x = 1;
  }
}

// Game Over
function gameOver() {
  noLoop();
  fill(0, 0, 255);
  text("Game Over!", width / 2, height / 2);
  text("Your score: " + score, width / 2, height / 2 + 20);
  text("Press R to restart", width / 2, height / 2 + 40);
}

// Key Pressed
function keyPressed() {
  if (keyCode == 'r') {
    restart();
  }
}

// Restart
function restart() {
  snake = [];
  score = 0;
  setup();
  loop();
}
