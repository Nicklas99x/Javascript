const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const socket = io();

// Player objects
const player1 = { x: canvas.width / 2, y: canvas.height - 30 };
const player2 = { x: canvas.width / 2, y: 30 };

// Handle keyboard input for player 1
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    player1.x -= 5;
  } else if (event.key === 'ArrowRight') {
    player1.x += 5;
  }
});

// Handle keyboard input for player 2
document.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    player2.x -= 5;
  } else if (event.key === 'd') {
    player2.x += 5;
  }
});

// Update game state
function update() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw player 1
  ctx.fillStyle = 'red';
  ctx.fillRect(player1.x, player1.y, 30, 30);

  // Draw player 2
  ctx.fillStyle = 'blue';
  ctx.fillRect(player2.x, player2.y, 30, 30);

  // Send player positions to the server
  socket.emit('update', { player1, player2 });

  requestAnimationFrame(update);
}

update();
