const socket = io();

function joinRoom() {
  const roomName = document.getElementById('roomName').value;
  socket.emit('joinRoom', roomName);
}

function sendMessage() {
  const message = document.getElementById('message').value;
  const roomName = document.getElementById('roomName').value;
  socket.emit('chatMessage', { room: roomName, message });
}

socket.on('message', (message) => {
  const chat = document.getElementById('chat');
  chat.innerHTML += message + '<br>';
});