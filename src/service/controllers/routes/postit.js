var model = require('../models/postit');

module.exports.getAll = function(req, res) {
  res.json(model.getAll());
};

module.exports.get = function(req, res) {
  var postit = model.get(req.params.id);
  if (postit) {
    res.json(postit);
  } else {
    res.status(404);
    res.send();
  }
};

module.exports.add = function(req, res) {
  var id = model.add(req.body);

  if (id !== 0) {
    res.setHeader('Location', '/postit/' + id);
    res.status(201);
    res.json({
      id: id
    });
  } else {
    res.status(400);
    res.send();
  }
};

module.exports.delete = function(req, res) {
  var correct = model.delete(req.params.id);
  if (correct) {
    res.status(200);
    res.send();
  } else {
    res.status(400);
    res.send();
  }
};

module.exports.update = function(req, res) {
  var returnPostit = model.update(req.params.id, req.body);
  res.json(returnPostit);
};
