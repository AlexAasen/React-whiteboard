import * as types from '../constants/action-types';

module.exports.addPostIt = postIt => ({
  type: types.ADD_POSTIT,
  data: postIt
});

module.exports.removePostIt = postIt => ({
  type: types.REMOVE_POSTIT,
  data: postIt
});

module.exports.updatePostIt = postIt => ({
  type: types.UPDATE_POSTIT,
  data: postIt
});

module.exports.updatePostItColumn = postIt => ({
  type: types.UPDATE_POSTIT_COLUMN,
  data: postIt,
  oldData: postIt
});

module.exports.addColumn = column => ({
  type: types.ADD_COLUMN,
  data: column;
});
