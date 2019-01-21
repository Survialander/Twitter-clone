const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');


const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://survialander:And123@ds155293.mlab.com:55293/server-node',
{
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes.js'));

server.listen(500, () => {
    console.log('server started');
});