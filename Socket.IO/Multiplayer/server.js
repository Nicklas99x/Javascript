const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const publicPath = path.join(__dirname, '/');

// Server statiske filer fra rodmappen
app.use(express.static(publicPath));

// Rute for rodstien, der serverer din HTML-fil
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')); // Opdater til din filnavn
});

const players = [];

io.on('connection', (socket) => {
  console.log('A player connected');
  
  // Opret en ny spiller og tilføj den til listen
//   const player = { id: socket.id, x: canvas.width / 2, y: canvas.height - 30 };
//   players.push(player);

  // Send alle spillere til den nyligt tilsluttede spiller
  socket.emit('all-players', players);

  // Lyt til spilleropdateringer fra klienten
  socket.on('update', (data) => {
    // Find og opdater den korrekte spiller
    const updatedPlayer = players.find((p) => p.id === socket.id);
    if (updatedPlayer) {
      updatedPlayer.x = data.x;
      updatedPlayer.y = data.y;
    }
    
    // Broadcast opdateringer til alle spillere
    io.emit('update', players);
  });

  socket.on('disconnect', () => {
    console.log('A player disconnected');
    // Fjern den afbrudte spiller fra listen
    const index = players.findIndex((p) => p.id === socket.id);
    if (index !== -1) {
      players.splice(index, 1);
    }
  });
});

server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
