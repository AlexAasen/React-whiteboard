import { ADD_POSTIT, REMOVE_POSTIT, UPDATE_POSTIT, UPDATE_ALL_POSTITS } from '../constants/action-types';

const initialState = {
  backlog: [],
  stories: [],
  currsprint: [],
  wip: [],
  test: [],
  done: []
};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_POSTIT: {
      const newPostIt = Object.assign({}, action.data.postIt);
      switch (action.data.title) {
        case 'backlog': {
          newState.backlog = [...state.backlog, newPostIt];
          return newState;
        }
        case 'stories': {
          newState.stories = [...state.stories, newPostIt];
          return newState;
        }
        case 'currsprint': {
          newState.currsprint = [...state.currsprint, newPostIt];
          return newState;
        }
        case 'wip': {
          newState.wip = [...state.wip, newPostIt];
          return newState;
        }
        case 'test': {
          newState.test = [...state.test, newPostIt];
          return newState;
        }
        case 'done': {
          newState.done = [...state.done, newPostIt];
          return newState;
        }
        default: {
          return state;
        }
      }
    }
    case REMOVE_POSTIT: {
      switch (action.data.title) {
        case 'backlog': {
          newState.backlog = state.backlog.filter(postIt => postIt.id !== action.data.postIt.id);
          return newState;
        }
        case 'stories': {
          newState.stories = state.stories.filter(postIt => postIt.id !== action.data.postIt.id);
          return newState;
        }
        case 'currsprint': {
          newState.currsprint =
          state.currsprint.filter(postIt => postIt.id !== action.data.postIt.id);
          return newState;
        }
        case 'wip': {
          newState.wip = state.wip.filter(postIt => postIt.id !== action.data.postIt.id);
          return newState;
        }
        case 'test': {
          newState.test = state.test.filter(postIt => postIt.id !== action.data.postIt.id);
          return newState;
        }
        case 'done': {
          newState.done = state.done.filter(postIt => postIt.id !== action.data.postIt.id);
          return newState;
        }
        default: {
          return state;
        }
      }
    }
    case UPDATE_ALL_POSTITS: {
      const newColumn = [...action.data.postIts];
      switch (action.data.title) {
        case 'backlog': {
          newState.backlog = newColumn;
          return newState;
        }
        case 'stories': {
          newState.stories = [...action.data.postIts];
          return newState;
        }
        case 'currsprint': {
          newState.currsprint = [...action.data.postIts];
          return newState;
        }
        case 'wip': {
          newState.wip = [...action.data.postIts];
          return newState;
        }
        case 'test': {
          newState.test = [...action.data.postIts];
          return newState;
        }
        case 'done': {
          newState.done = [...action.data.postIts];
          return newState;
        }
        default: {
          return state;
        }
      }
    }
    case UPDATE_POSTIT: {
      const newPostIt = Object.assign({}, action.data);
      switch (action.data.title) {
        case 'backlog': {
          newState.backlog = newState.backlog = Object.assign({}, state, state.backlog.map(postIt =>
            postIt.id === action.data.postIt.id ? Object.assign({}, postIt, newPostIt) : postIt));
          return newState;
        }
        case 'stories': {
          newState.stories = newState.stories = Object.assign({}, state,
            state.stories.map(postIt =>
            postIt.id === action.data.postIt.id ? Object.assign({}, postIt, newPostIt) : postIt));
          return newState;
        }
        case 'currsprint': {
          newState.currsprint = newState.currsprint = Object.assign({}, state,
            state.currsprint.map(postIt =>
            postIt.id === action.data.postIt.id ? Object.assign({}, postIt, newPostIt) : postIt));
          return newState;
        }
        case 'wip': {
          newState.wip = newState.wip = Object.assign({}, state,
            state.wip.map(postIt =>
            postIt.id === action.data.postIt.id ? Object.assign({}, postIt, newPostIt) : postIt));
          return newState;
        }
        case 'test': {
          newState.test = newState.test = Object.assign({}, state, state.test.map(postIt =>
            postIt.id === action.data.postIt.id ? Object.assign({}, postIt, newPostIt) : postIt));
          return newState;
        }
        case 'done': {
          newState.done = newState.done = Object.assign({}, state, state.done.map(postIt =>
            postIt.id === action.data.postIt.id ? Object.assign({}, postIt, newPostIt) : postIt));
          return newState;
        }
        default: {
          return state;
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
