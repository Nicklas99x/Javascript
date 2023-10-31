const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const players = [];

const socket = io();

// Lyt til opdateringer for alle spillere
socket.on('all-players', (data) => {
  players.push(...data);
});

// Funktion til at initialisere spilleren
function initializePlayer() {
  return {
    x: canvas.width / 2, // Startposition i midten
    y: canvas.height - 30,
    speed: 5, // Juster efter behov
  };
}

let player = initializePlayer();

// Lyt til tastaturindtastninger for spillerbevægelse
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && player.x > 0) {
    // Flyt spilleren til venstre, men sørg for, at de ikke går uden for venstre kant
    player.x -= player.speed;
  } else if (event.key === 'ArrowRight' && player.x < canvas.width - 30) {
    // Flyt spilleren til højre, men sørg for, at de ikke går uden for højre kant
    player.x += player.speed;
  }
});

// Funktion til opdatering og tegning af spilleren
function drawPlayer() {
    console.log('Drawing player:', player.x, player.y);
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, 30, 30);
}

// Spilloop for at opdatere og tegne spillet
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  players.forEach((player) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, 30, 30);
  });
  requestAnimationFrame(gameLoop);
}

gameLoop();
