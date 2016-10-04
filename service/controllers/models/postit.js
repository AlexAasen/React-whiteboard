var Storage = require('dom-storage');
var localStorage = new Storage('./postit-db.json');

var postits = localStorage.getItem('postitRepo') ? JSON.parse(localStorage.getItem('postitRepo')) : [];

function generateId(){
  return +(new Date());
}

function update(){
  localStorage.setItem('postitRepo', JSON.stringify(postits));
}

module.exports.getAll = function(){
  return postits;
};

module.exports.get = function(id){
  id = parseInt(id);
  var postit = postits.filter(function(postit){
    return (postit.id === id);
  })[0];
  return postit;
};

module.exports.add = function(postit){
  var id;
  id = generateId();
  postits.push({
    id: id,
    postit: postit
  });
  update();
  return id;
};

module.exports.delete = function(id){
  id = parseInt(id);
  postits = postits.filter(function(postit){
    return (postit.id !== id);
  });
  update();
};

module.exports.update = function(id, updatedPostit){
  id = parseInt(id);
  postits = postits.filter(function(postit){
    if(postit.id === id){
      postit.postit = updatedPostit;
      updatedPostit = postit;
      return postit;
    }else{
      return postit;
    }
  });
  update();
  return updatedPostit;
};
