const config = require('../config/database');
const jwt = require('jsonwebtoken');

module.exports = (router, io) => {
    io.on('connection', function (socket) {
        console.log('connected');
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
            console.log(data);
        });
    });

    return router;
};