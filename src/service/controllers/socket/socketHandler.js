var events = require('events');
var eventEmitter = new events.EventEmitter();
var floggitModel = require('../models/floggit');

module.exports = function(socket){
  function onChange(items){
    socket.emit('broadcast', items);
  }

  onChange(floggitModel.getAll());

  on('socket', onChange);

  socket.on('disconnect', function() {
      removeListener('socket', onChange);
   });
};

module.exports.update = function(){
  eventEmitter.emit('socket', floggitModel.getAll());
};

function on(name, func){
  eventEmitter.on(name, func);
};

function removeListener(name, func){
  eventEmitter.removeListener(name, func);
};
