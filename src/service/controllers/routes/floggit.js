var floggitModel = require('../models/floggit');

module.exports.get = function(req, res) {
  var columnID = req.params.columnID;
  var postitID = req.params.postitID;
  var returnValue;

  if (columnID === undefined && postitID === undefined) {
    returnValue = floggitModel.getAll();
  } else {
    if (postitID === undefined) {
      returnValue = floggitModel.getColumn(columnID);
    } else {
      returnValue = floggitModel.getPostit(columnID, postitID);
    }
  }

  res.json(returnValue);
};

module.exports.add = function(req, res) {
  var columnID = req.params.columnID;
  var newObject = req.body;
  var returnValue;

  if (columnID === undefined) {
    var returnValue = floggitModel.addColumn(newObject);
    res.setHeader('Location', '/column/' + returnValue);
    res.status(201);
    res.json({
      id: returnValue
    });
  } else {
    returnValue = floggitModel.add(columnID, newObject);

    if (returnValue !== undefined) {
      res.setHeader('Location', '/column/' + returnValue);
      res.status(201);
      res.json({
        id: returnValue
      });
    } else {
      res.status(400);
      res.send();
    }
  }
};

module.exports.delete = function(req, res) {
  var columnID = req.params.columnID;
  var postitID = req.params.postitID;
  var returnValue;

  returnValue = floggitModel.deletePostit(columnID, postitID);

  if (returnValue) {
    res.status(200);
    res.send();
  } else {
    res.status(400);
    res.send();
  }
};

module.exports.update = function(req, res) {
  var columnID = req.params.columnID;
  var postitID = req.params.postitID;
  var newObject = req.body;
  var returnValue;

  if (postitID === undefined) {
    returnValue = floggitModel.updateColumn(columnID, newObject);
  } else {
    returnValue = floggitModel.updatePostit(columnID, postitID, newObject);
  }

  res.json(returnValue);
};
