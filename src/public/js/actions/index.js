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

export const removeAllRequirements = () => ({
  type: types.REMOVE_ALL_REQUIREMENTS
})

export const getPostItsRequirements = (postItRequirements) => ({
  type: types.GET_ALL_REQUIREMENTS,
  data: postItRequirements
});


const internalAddPostIt = (postIt, title) => ({
  type: types.ADD_POSTIT,
  data: {
    postIts,
    title
  }
});

const internalUpdateAllPostIts = (postIts, title) => ({
  type: types.UPDATE_ALL_POSTITS,
  data: {
    postIts,
    title
  }
});

const internalUpdatePostIt = (postIt, title) => ({
  type: types.UPDATE_POSTIT,
  data: {
    postIts,
    title
  }
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

module.exports.removePostIt = (postIt, title) => ({
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

export const addPostIt = (postIt, colTitle) => (dispatch) => {
    dispatch(setLoading());
    request('POST', colTitle, function(response){
    }, postIt);
    dispatch(setLoaded);
};

export const removePostIt = (id, colTitle) => (dispatch) => {
  dispatch(setLoading());
  request('DELETE', colTitle+'/'+id, function(response){
  });
  dispatch(setLoaded);
};

export const updatePostIt = (postIt, colTitle) => (dispatch) => {
  dispatch(setLoading());
  request('PUT', colTitle+'/'+postIt.id, function(response){
  }, postIt);
  dispatch(setLoaded);
};

export const moveLeft = postIt => (dispatch) => {
  const columns = ["backlog", "stories", "currsprint", "wip", "test", "done"];
  const index = columns.indexOf(postIt.columnId);
  if(index > 0){
    dispatch(setLoading());
    request('DELETE', postIt.columnId+'/'+postIt.id, function(response){
    });
    postIt.columnId = columns[index-1];
    request('POST', columns[index-1], function(response){
    }, postIt);
    dispatch(setLoaded);
  }
};

export const moveRight = postIt => (dispatch) => {
  const columns = ["backlog", "stories", "currsprint", "wip", "test", "done"];
  const index = columns.indexOf(postIt.columnId);
  if(index < 5){
    dispatch(setLoading());
    request('DELETE', postIt.columnId+'/'+postIt.id, function(response){
    });
    postIt.columnId = columns[index+1];
    request('POST', columns[index+1], function(response){
    }, postIt);
    dispatch(setLoaded);
  }
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
          columnId: postIt.obj.columnId,
          description: postIt.obj.description,
          requirements: postIt.obj.requirements
        }));
        console.log('we are here', postIts);
        dispatch(internalUpdateAllPostIts(postIts, columns[i].id));
      }
    }
  });
  socket.on('disconnect', () => {
    dispatch(setSocketInActive());
  });
};
