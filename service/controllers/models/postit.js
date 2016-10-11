var storage = require('../storage/storageHandler');
var socket = require('../socket/socketHandler');

function generateId() {
  return +(new Date());
}

function update() {
  storage.postitStorage().setItem('postitRepo', JSON.stringify(storage.getPostits()));
  socket.update();
}

module.exports.getAll = function() {
  return storage.getPostits();
};

module.exports.get = function(id) {
  id = parseInt(id);
  var postit = storage.getPostits().filter(function(postit) {
    return (postit.id === id);
  })[0];
  return postit;
};

module.exports.add = function(postit) {
  var id;

  if (postit.title !== '') {
    id = generateId();
    storage.getPostits().push({
      id: id,
      postit: postit
    });

    update();
    return id;
  } else {
    return 0;
  }
};

module.exports.delete = function(id) {
  id = parseInt(id);
  var newPostits = storage.getPostits().filter(function(postit) {
    return (postit.id !== id);
  });
  
  storage.setPostits(newPostits);
  update();
  return true;
};

module.exports.update = function(id, updatedPostit) {
  id = parseInt(id);
  postits = storage.getPostits().filter(function(postit) {
    if (postit.id === id) {
      postit.postit = updatedPostit;
      updatedPostit = postit;
      return postit;
    } else {
      return postit;
    }
  });
  update();
  return updatedPostit;
};
