var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var corsFilter = require('./middleware/cors-filter');
var routesCtr = require('./controllers/routes/postit');

app.use(bodyParser.json());

app.use(corsFilter);

app.get('/floggit/postit', routesCtr.getAll);
app.get('/floggit/postit/:id', routesCtr.get);
app.post('/floggit/postit', routesCtr.add);
app.put('/floggit/postit/:id', routesCtr.update);
app.delete('/floggit/postit/:id', routesCtr.delete);

http.listen(1337, function(){
  console.log('Server started 1337');
});
