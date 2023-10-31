const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);

const rooms = {};

io.on('connection', (socket) => {
    console.log('A new user joined');

    socket.on('joinRoom', (roomName) => {
        if(!rooms[roomName]){
            rooms[roomName] = [];
        }

        rooms[roomName].push(socket);
        socket.join(roomName);
    })

    socket.on('chatMessage', (data) => {
        const { room, message } = data;
        io.to(room).emit('message', message);
      });

    socket.on('disconnect', () => {
    for(const room in rooms) {
        const index = rooms[room].indexOf(socket);
        if(index !== -1) {
            rooms[room].splice(index, 1);

            if(rooms[room].length === 0) {
                delete rooms[room];
            }
        }
    }
        console.log('A user disconnected');
    });
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
  });