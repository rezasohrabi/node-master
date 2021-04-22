const http = require('http');
const path = require('path');
const express = require('express');
const socket = require('socket.io');
const { formatMessage } = require('./utils');
const { addUser, getCurrentUser } = require('./db');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const CHAT_NAME = 'Sky Chat Room';

//run when a user connects
io.on('connection', socket => {
    socket.on('joinRoom', (username, room) => {
        const user = addUser(socket.id, username, room);
        socket.join(user.room);
        
        //welcome to joined user
        socket.emit(
            'broadcastMessage', 
            formatMessage(CHAT_NAME, 'Welcome to chat room')
        );
        //inform other users
        socket.broadcast.to(user.room).emit(
            'broadcastMessage', 
            formatMessage(CHAT_NAME, `${user.username} has joined, say hi to him`)
        );
    });
})

//set static folder
app.use(
    express.static(path.join(__dirname, 'public'))
);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
