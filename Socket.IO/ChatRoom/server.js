// Importér nødvendige moduler
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Opret en Express.js-app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Server statiske filer fra "public" mappen
app.use(express.static(__dirname + '/public'));

// Opret en liste til opbevaring af brugernavne
const usernames = {};

// Når en klient forbinder
io.on('connection', (socket) => {
  console.log('A user connected');

  // Når en bruger sender en besked
  socket.on('chat message', (msg) => {
    io.emit('chat message', `${usernames[socket.id]}: ${msg}`);
  });

  // Når en bruger tilslutter sig og vælger et brugernavn
  socket.on('set username', (username) => {
    usernames[socket.id] = username;
    io.emit('user connected', `${username} has joined the chat`);
  });

  // Når en bruger frakobler
  socket.on('disconnect', () => {
    const username = usernames[socket.id];
    delete usernames[socket.id];
    io.emit('user disconnected', `${username} has left the chat`);
    console.log('A user disconnected');
  });
});

// Start serveren på port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
