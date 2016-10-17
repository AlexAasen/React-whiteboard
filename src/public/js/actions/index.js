import * as types from '../constants/action-types';

module.exports.addPostIt = postIt => ({
  type: types.ADD_POSTIT,
  data: postIt
});

module.exports.updatePostIt = postIt => ({
  type: types.UPDATE_POSTIT,
  data: postIt
});

module.exports.updatePostItColumn = postIt => ({
  type: types.UPDATE_POSTIT_COLUMN,
  data: postIt
});

module.exports.setVisFilterPostIt = boolean => ({
  type: types.SET_VISFILTER_POSTIT,
  data: boolean
});
