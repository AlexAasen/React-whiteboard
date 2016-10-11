var express = require('express');
var app = express();
var http = require('http').Server(app);
var socket = require('socket.io')(http);
var bodyParser = require('body-parser');
var corsFilter = require('./middleware/cors-filter');
var columnRoutesCtr = require('./controllers/routes/column');
var postitRoutesCtr = require('./controllers/routes/postit');
var sockets = require('./controllers/socket/socketHandler');

app.use(bodyParser.json());

app.use(corsFilter);

app.get('/floggit/postit', postitRoutesCtr.getAll);
app.get('/floggit/postit/:id', postitRoutesCtr.get);
app.post('/floggit/postit', postitRoutesCtr.add);
app.put('/floggit/postit/:id', postitRoutesCtr.update);
app.delete('/floggit/postit/:id', postitRoutesCtr.delete);

app.get('/floggit/column', columnRoutesCtr.getAll);
app.get('/floggit/column/:id', columnRoutesCtr.get);
app.post('/floggit/column', columnRoutesCtr.add);
app.put('/floggit/column/:id', columnRoutesCtr.update);
app.delete('/floggit/column/:id', columnRoutesCtr.delete);

socket.on('connection', sockets);

http.listen(1337, function() {
  console.log('Server started 1337');
});
