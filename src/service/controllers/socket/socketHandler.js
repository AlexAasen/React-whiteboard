var events = require('events');
var eventEmitter = new events.EventEmitter();
var columns = require('../models/column');

module.exports = function(socket){
  function onChange(items){
    socket.emit('broadcast', items);
  }

  onChange(columns.getAll());

  on('socket', onChange);

  socket.on('disconnect', function() {
      removeListener('socket', onChange);
   });
};

module.exports.update = function(){
  eventEmitter.emit('socket', columns.getAll());
};

function on(name, func){
  eventEmitter.on(name, func);
};

function removeListener(name, func){
  eventEmitter.removeListener(name, func);
};
