
/*
* declaring all libraries to be load.
*/
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const time = require('./time');
const moment = require('moment');
const port = 9090;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
 
http.listen(port, function(){
    console.log(`server is listenning in localhost:${port}`)
});

io.on('connection', function(socket){
    console.log('Client connection received');
    socket.emit('sendToClient',{currentTime: 'nadav' });
    socket.on('receivedFromClient', function (currentTime) {
        console.log(data);
    });
});

var latestData;

setInterval(function() {
    time.getTimeText().then((result) => { 
        
        // Update latest results for when new client's connect
        latestData = result; 

        // send it to all connected clients
        io.emit('currentTime', result);

        console.log('Last updated: ' + result);
    });
}, 1000);
