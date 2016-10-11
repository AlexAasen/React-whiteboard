var Storage = require('dom-storage');

var columnStorage = new Storage('./column-db.json');
var postitStorage = new Storage('./postit-db.json');

var columns = columnStorage.getItem('columnRepo') ? JSON.parse(columnStorage.getItem('columnRepo')) : [];
var postits = postitStorage.getItem('postitRepo') ? JSON.parse(postitStorage.getItem('postitRepo')) : [];

module.exports.getColumns = function(){
  return columns;
};

module.exports.getPostits = function(){
  return postits;
};

module.exports.columnStorage = function(){
  return columnStorage;
};

module.exports.postitStorage = function(){
  return postitStorage;
};

module.exports.setColumns = function(newColumns){
  columns = newColumns;
};

module.exports.setPostits = function(newPostits){
  postits = newPostits;
};
