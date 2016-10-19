import socketIOClient from 'socket.io-client';
import * as types from '../constants/action-types';
import { WHITEBOARD_URL } from '../constants/service';
import request from '../crud/requests';

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
});

export const getPostItsRequirements = postItRequirements => ({
  type: types.GET_ALL_REQUIREMENTS,
  data: postItRequirements
});

const internalAddPostIt = (postIt, title) => ({
  type: types.ADD_POSTIT,
  data: {
    postIt,
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
    postIt,
    title
  }
});

export const updatePostItColumn = postIt => ({
  type: types.UPDATE_POSTIT_COLUMN,
  data: postIt
});

export const showDialog = () => ({
  type: types.SHOW_DIALOG
});

export const hideDialog = () => ({
  type: types.HIDE_DIALOG
});

export const showEditDialog = postIt => ({
  type: types.SHOW_EDIT_DIALOG,
  data: postIt
});

export const hideEditDialog = () => ({
  type: types.HIDE_EDIT_DIALOG
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
  request('POST', colTitle, (response) => {
  }, postIt);
  dispatch(setLoaded);
};

export const removePostIt = (id, colTitle) => (dispatch) => {
  dispatch(setLoading());
  request('DELETE', `${colTitle}/${id}`, (response) => {
  });
  dispatch(setLoaded);
};

export const updatePostIt = (postIt, colTitle) => (dispatch) => {
  dispatch(setLoading());
  request('PUT', `${colTitle}/${postIt.id}`, (response) => {
  }, postIt);
  dispatch(setLoaded);
};

export const startSocket = () => (dispatch) => {
  const socket = socketIOClient(WHITEBOARD_URL);
  socket.on('connect', () => {
    dispatch(setSocketActive);
  });
  socket.on('broadcast', (columns) => {
    console.log(columns);
    for (let i = 0; i < columns.length; i++) {
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
