var storage = require('../storage/storageHandler');
var socket = require('../socket/socketHandler');

function generateId() {
  return +(new Date());
}

function update() {
  storage.columnStorage().setItem('columnRepo', JSON.stringify(storage.getColumns()));
  socket.update();
}

var getAll = function() {
  return storage.getColumns();
};

var getColumn = function(columnID) {
  var columnID = columnID.toLowerCase();

  var column = storage.getColumns().filter(function(column) {
    return (column.id === columnID);
  })[0];
  return column;
};

var getPostit = function(columnID, postitID) {
  postitID = parseInt(postitID);
  var columnID = columnID.toLowerCase();

  var postit = getColumn(columnID).postits.filter(function(postit) {
    return (postit.id === postitID);
  })[0];

  return postit;
};

var add = function(columnID, newPostit) {
  var id = generateId();
  var columnID = columnID.toLowerCase();

  getColumn(columnID).postits.push({
    id: id,
    obj: newPostit
  });

  update();
  return id;
};

var addColumn = function(newColumn) {
  var id = newColumn.id.toLowerCase();

  storage.getColumns().push({
    id: id,
    postits: []
  });

  update();
  return id;
};

var deletePostit = function(columnID, postitID) {
  postitID = parseInt(postitID);
  var columnID = columnID.toLowerCase();
  var column = getColumn(columnID);

  column.postits = column.postits.filter(function(postit) {
    return (postit.id !== postitID);
  });

  update();
  return true;
};

var updateColumn = function(columnID, updatedColumn) {
  var columnID = columnID.toLowerCase();

  var column = getColumn(columnID).postits = updatedColumn;

  update();
  return column;
};

var updatePostit = function(columnID, postitID, updatedPostit) {
  var columnID = columnID.toLowerCase();

  var postit = getPostit(columnID, postitID).obj = updatedPostit;

  update();
  return postit;
};

module.exports.getAll = getAll;
module.exports.getColumn = getColumn;
module.exports.getPostit = getPostit;
module.exports.add = add;
module.exports.addColumn = addColumn;
module.exports.deletePostit = deletePostit;
module.exports.updateColumn = updateColumn;
module.exports.updatePostit = updatePostit;
