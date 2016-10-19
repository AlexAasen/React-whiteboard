import * as types from '../constants/action-types';
import { WHITEBOARD_URL } from '../constants/service';
import request from '../crud/requests';
import socketIOClient from 'socket.io-client';

export const addRequirement = requirement => ({
  type: types.ADD_REQUIREMENT,
  data: requirement
});

export const removeRequirement = id => ({
  type: types.REMOVE_REQUIREMENT,
  data: id
});

export const returnPostItRequirements = () => ({
  type: types.RETURN_POSTIT_REQUIREMENTS
});

export const addPostIt = (postIt, title) => ({
  type: types.ADD_POSTIT,
  data: postIt, title
});

export const updateBacklogPostIts = postIts => ({
  type: types.UPDATE_ALL_POSTITS,
  data: postIts
})

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

module.exports.removePostIt = postIt, title => ({
  type: types.REMOVE_POSTIT,
  data: postIt, title
});

export const setLoading = () => ({
  type: types.SET_LOADING
});
export const setLoaded = () => ({
  type: types.SET_LOADED
});
export const setSocketActive = () => ({
  type: types.SET_SOCKET_ACTIVE
});
export const setSocketInActive = () => ({
  type: types.SET_SOCKET_INACTIVE
});
export const setError = message => ({
  type: types.SET_ERROR,
  data: message
});
export const clearError = () => ({
  type: types.CLEAR_ERROR
});

export const addPostItToBacklog = postIt => (dispatch) => {
    dispatch(setLoading());
    request('POST', 'backlog', function(response){
    }, postIt);
    dispatch(setLoaded);
};

export const removePostItFromBacklog = id => (dispatch) => {

};

export const startSocket = () => (dispatch) => {
  const socket = socketIOClient(WHITEBOARD_URL);
  socket.on('connect', () => {
    dispatch(setSocketActive);
  });
  socket.on('broadcast', (columns) => {
    console.log(columns);
    for(let i = 0; i < columns.length; i++){
      if (columns[i].postits) {
        const postIts = columns[i].postits.map(postIt => ({
          id: postIt.id,
          title: postIt.obj.title,
          color: postIt.obj.color,
          description: postIt.obj.description,
          requirements: postIt.obj.requirements
        }));
        console.log('we are here', postIts);
        switch(columns[i].id){
          case "backlog": {
            return dispatch(updateBacklogPostIts(postIts));
          }
          default: {
            return undefined;
          }
        }
      }


    }
  });
  socket.on('disconnect', () => {
    dispatch(setSocketInActive());
  });
};
