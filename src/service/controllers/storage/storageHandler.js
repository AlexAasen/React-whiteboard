var Storage = require('dom-storage');

var columnStorage = new Storage('./controllers/storage/database.json');
var columns = columnStorage.getItem('columnRepo') ? JSON.parse(columnStorage.getItem('columnRepo')) : [];

module.exports.getColumns = function(){
  return columns;
};

module.exports.columnStorage = function(){
  return columnStorage;
};
