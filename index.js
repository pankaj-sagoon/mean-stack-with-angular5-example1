const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')
const config = require('./config/database');
const mongoose = require('mongoose');
const authentication = require('./routes/authentication')(router);
const blogs = require('./routes/blog')(router);
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8080;
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
    origin: 'http://localhost:4200',
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

app.use('/authentication', authentication);
app.use('/blogs', blogs);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
    console.log('Listening on port number ' + port);
});