import * as types from '../constants/action-types';
import { WHITEBOARD_URL } from '../constants/service';
import axios from 'axios';
import socketIOClient from 'socket.io-client';

export const addRequirement = requirement => ({
  type: types.ADD_REQUIREMENT,
  data: requirement
});

export const removeRequirement = id => ({
  type: types.REMOVE_REQUIREMENT,
  data: number
});

export const returnPostItRequirements = () => ({
  type: types.RETURN_POSTIT_REQUIREMENTS
});

const internalAddPostItToBacklog = postIt => ({
  type: types.ADD_POSTIT_TO_BACKLOG,
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

const internalRemovePostItFromBacklog = number => ({
  type: types.REMOVE_POSTIT,
  data: number
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
    return axios.post(`${WHITEBOARD_URL}/:backlog`, postIt)
      .then((response) => {
        const localPostIt = {
          id: response.data.id,
          title: postIt.title,
          color: postIt.color,
          description: postIt.description,
          requirements: postIt.requirements
        };
        dispatch(internalAddPostItToBacklog(localPostIt));
        dispatch(setLoaded);
        dispatch(clearError());
      })
    .catch(() => {
      dispatch(setError('Couldn\'t add data from server'));
    });
};

export const removePostItFromBacklog = id => (dispatch) => {
  dispatch(setLoading());
  return axios.delete(`${WHITEBOARD_URL}/:backlog/:${id}`)
      .then(() => {
        dispatch(internalRemovePostItFromBacklog(id));
        dispatch(setLoaded);
        dispatch(clearError());
      })
    .catch(() => {
      dispatch(setError('Couldn\'t remove data from server'));
    });
};

export const startSocket = () => (dispatch) => {
  const socket = socketIOClient(WHITEBOARD_URL);
  socket.on('connect', () => {
    dispatch(setSocketActive);
  });
  socket.on('postIt-update', (data) => {
    const postIts = data.map(postIt => ({
      id: postIt.id,
      title: postIt.obj.title,
      color: postIt.obj.color,
      description: postIt.obj.description,
      requirements: postIt.obj.requirements
    })
    );
    dispatch(updateAllPostIts(todos));
  });
  socket.on('disconnect', () => {
    dispatch(setSocketInActive());
  });
};
