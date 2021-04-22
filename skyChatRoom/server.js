const http = require('http');
const path = require('path');
const express = require('express');
const socket = require('socket.io');
const { formatMessage } = require('./utils');
const { addUser, getCurrentUser } = require('./db');

const app = express();
const server = http.createServer(app);
const io = socket(server);

//run when a user connects
io.on('connection', socket => {
    socket.on('joinRoom', (username, room) => {
        const user = addUser(socket.id, username, room);
        
        //welcome to joined user
        socket.emit('broadcastMessage', formatMessage('Sky Chat Room', 'Welcome to chat room'));
    });
})

//set static folder
app.use(
    express.static(path.join(__dirname, 'public'))
);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
