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

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('text-update', (data) => {
    // Broadcast den opdaterede tekst til alle tilsluttede klienter
    socket.broadcast.emit('update-text', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
