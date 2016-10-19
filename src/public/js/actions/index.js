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

module.exports.showDialog = () => ({
  type: types.SHOW_DIALOG
});
module.exports.hideDialog = () => ({
  type: types.HIDE_DIALOG
});
module.exports.showEditDialog = postIt => ({
  type: types.SHOW_EDIT_DIALOG,
  data: postIt
});
module.exports.hideEditDialog = () => ({
  type: types.HIDE_EDIT_DIALOG
});

module.exports.removePostIt = postIt => ({
  type: types.REMOVE_POSTIT,
  data: postIt
});
