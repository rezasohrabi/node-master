const http = require('http');
const path = require('path');
const express = require('express');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

io.on('connection', socket => {
    console.log('New Connection')
    socket.on('message', message => {
        console.log(message);
    })
})

app.use(
    express.static(path.join(__dirname, 'public'))
);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
