const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;

// Snake initial position
let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 },
];

// Movement direction
let dx = 10;
let dy = 0;
let changingDirection = false;

// Food position
let foodX;
let foodY;

// Create food at a random location not on the snake
function createFood() {
  foodX = randomTen(0, canvas.width - 10);
  foodY = randomTen(0, canvas.height - 10);

  snake.forEach(function isFoodOnSnake(part) {
    if (part.x === foodX && part.y === foodY) createFood();
  });
}

// Utility to align food to 10px grid
function randomTen(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

// Draw the food
function drawFood() {
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'darkred';
  ctx.fillRect(foodX, foodY, 10, 10);
  ctx.strokeRect(foodX, foodY, 10, 10);
}

// Clear and draw canvas border
function clearCanvas() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

// Draw snake
function drawSnakePart(part) {
  ctx.fillStyle = 'lightgreen';
  ctx.strokeStyle = 'darkgreen';
  ctx.fillRect(part.x, part.y, 10, 10);
  ctx.strokeRect(part.x, part.y, 10, 10);
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}

// Move the snake forward
function advanceSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  const didEatFood = head.x === foodX && head.y === foodY;
  if (didEatFood) {
    score += 10;
    document.getElementById('score').innerHTML = score;
    createFood();
  } else {
    snake.pop();
  }
}

// Change direction with keyboard
function changeDirection(event) {
  if (changingDirection) return;

  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (keyPressed === LEFT_KEY && !goingRight) {
    dx = -10;
    dy = 0;
  }
  if (keyPressed === UP_KEY && !goingDown) {
    dx = 0;
    dy = -10;
  }
  if (keyPressed === RIGHT_KEY && !goingLeft) {
    dx = 10;
    dy = 0;
  }
  if (keyPressed === DOWN_KEY && !goingUp) {
    dx = 0;
    dy = 10;
  }

  changingDirection = true;
}

// End game on wall or self collision
function didGameEnd() {
  for (let i = 4; i < snake.length; i++) {
    const hasCollided = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
    if (hasCollided) return true;
  }

  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x >= canvas.width; 
  const hitTopWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y >= canvas.height;

  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
} 

// Main game loop
function main() {
  if (didGameEnd()) {
    alert('Game Over!');
    return;
  }

  changingDirection = false;
  setTimeout(function onTick() {
    clearCanvas();
    drawFood();
    advanceSnake();
    drawSnake();
    main();
  }, 100);
}

// Start the game
document.addEventListener('keydown', changeDirection);
createFood();
main();
