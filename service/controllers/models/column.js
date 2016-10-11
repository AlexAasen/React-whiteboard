var storage = require('../storage/storageHandler');
var socket = require('../socket/socketHandler');

function generateId() {
  return +(new Date());
}

function update() {
  storage.columnStorage().setItem('columnRepo', JSON.stringify(storage.getColumns()));
  socket.update();
}

module.exports.getAll = function() {
  var newColumns;

  newColumns = storage.getColumns().filter(function(column) {
    column.column.postits = storage.getPostits().filter(function(postit){
      if(column.column.column === postit.postit.column){
        return postit;
      }
    });
    return column;
  });

  return newColumns;
};

module.exports.get = function(id) {
  id = parseInt(id);
  var column = storage.getColumns().filter(function(column) {
    return (column.id === id);
  })[0];
  return column;
};

module.exports.add = function(column) {
  var id;

  if (column.title !== '') {
    id = generateId();
    storage.getColumns().push({
      id: id,
      column: column
    });

    update();
    return id;
  } else {
    return 0;
  }
};

module.exports.delete = function(id) {
  id = parseInt(id);
  columns = storage.getColumns().filter(function(column) {
    return (column.id !== id);
  });
  update();
};

module.exports.update = function(id, updatedColumn) {
  id = parseInt(id);
  columns = storage.getColumns().filter(function(column) {
    if (column.id === id) {
      column.column = updatedColumn;
      updatedColumn = column;
      return column;
    } else {
      return column;
    }
  });
  update();
  return updatedColumn;
};
