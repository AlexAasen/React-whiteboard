var model = require('../models/column');

module.exports.getAll = function(req, res) {
  res.json(model.getAll());
};

module.exports.get = function(req, res) {
  var column = model.get(req.params.id);
  if (column) {
    res.json(column);
  } else {
    res.status(404);
    res.send();
  }
};

module.exports.add = function(req, res) {
  var id = model.add(req.body);

  if (id !== 0) {
    res.setHeader('Location', '/column/' + id);
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
  model.delete(req.params.id);
  res.status(200);
  res.send();
};

module.exports.update = function(req, res) {
  var returnColumn = model.update(req.params.id, req.body);
  res.json(returnColumn);
};
