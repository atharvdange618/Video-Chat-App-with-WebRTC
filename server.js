const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`);
});

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room });
});

const users = {};

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        if (!users[roomId]) {
            users[roomId] = [];
        }
        users[roomId].push(userId);
        socket.join(roomId);

        // Notify other users in the room about the new user
        socket.to(roomId).emit('user-connected', userId);

        // Emit the user list to the new user
        socket.emit('update-user-list', users[roomId].filter(id => id !== userId));

        socket.on('disconnect', () => {
            users[roomId] = users[roomId].filter(id => id !== userId);
            socket.to(roomId).emit('user-disconnected', userId);
        });
    });
});

server.listen(8080, () => {
    console.log('Server is running on port 3000');
});
