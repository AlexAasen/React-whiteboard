var express = require('express');
var app = express();
var http = require('http').Server(app);
var socket = require('socket.io')(http);
var bodyParser = require('body-parser');
var corsFilter = require('./middleware/cors-filter');
var floggitCtr = require('./controllers/routes/floggit');
var sockets = require('./controllers/socket/socketHandler');

app.use(bodyParser.json());

app.use(corsFilter);

app.get('/floggit/all', floggitCtr.get);
app.get('/floggit/:columnID', floggitCtr.get);
app.get('/floggit/:columnID/:postitID', floggitCtr.get);

app.post('/floggit/:columnID', floggitCtr.add);
app.post('/floggit/', floggitCtr.add);

app.put('/floggit/:columnID/:postitID', floggitCtr.update);
app.put('/floggit/:columnID', floggitCtr.update);

app.delete('/floggit/:columnID/:postitID', floggitCtr.delete);

socket.on('connection', sockets);

http.listen(8081, function() {
  console.log('Server started 8081');
});
