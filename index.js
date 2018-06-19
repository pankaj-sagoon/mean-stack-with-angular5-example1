const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;
const router = express.Router();
const bodyParser = require('body-parser')
const config = require('./config/database');
const mongoose = require('mongoose');
const authentication = require('./routes/authentication')(router);
const blogs = require('./routes/blog')(router);
const socket = require('./routes/socket')(router, io);
const path = require('path');
const cors = require('cors');

mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could not connect to database');
    } else {
        console.log('Connected to database: ' + config.db);
    }
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/public/'));

//allow cors
app.use(cors({
    origin: 'http://localhost:4300',
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

app.use('/authentication', authentication);
app.use('/blogs', blogs);
app.use('/socket', socket);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

server.listen(port, () => {
    console.log('Listening on port number ' + port);
});

/*const io =require('socket.io').listen(server.listen(port,function() {
    console.log('server up and running at %s port', port);
}));*/