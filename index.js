const express = require('express');
const app = express();
const config = require('./config/database');
const mongoose = require('mongoose');
const path = require('path');
mongoose.connect(config.uri, (err) => {
    if(err){
        console.log('Could not connect to database');
    }else{
        console.log('Connected to database: ' +  config.db);
    }
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/client/dist/'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, ()=> {
    console.log('Listening on port number 8080');
});