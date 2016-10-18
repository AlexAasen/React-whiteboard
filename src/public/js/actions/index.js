import * as types from '../constants/action-types';

const internalAddPostIt = postIt => ({
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

const internalRemovePostIt = number => ({
  type: types.REMOVE_POSTIT,
  data: number
});

export const addPostIt = postIt => (dispatch) => {
    dispatch(setLoading());
    return axios.post(`${TODOS_URL}/v1/backlogPostIts`, postIt)
      .then((response) => {
      //  const localTodo = {
      //    id: response.data.id,
      //    text: todo.text
      //  };
      //  dispatch(internalAddTodo(localTodo));
        dispatch(setLoaded);
        dispatch(clearError());
      })
    .catch(() => {
      dispatch(setError('Couldn\'t add data from server'));
    });
};
