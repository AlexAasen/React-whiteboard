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

module.exports.correctingColumnsOrder = function(columns){
  columns.sort(function(a, b){
    return a.column.column - b.column.column;
  });
  // console.log(columns[0].postits.length);
  console.log(columns[0].column.post.length);
  for(var i = 0; i < columns.length; i++){
    columns[i].column.column = i+1;
    for(var j = 0; j < columns[i].column.post.length; j++){
      columns[i].column.post[j].postit.column = i+1;
    }
  }
  return columns;
}

function correctingPostitsOrder(postitStorage){

}
