import { SET_VISFILTER_COL,  SET_VISFILTER_POSTIT } from '../constants/action-types';

const reducer = (state = { filter: false }, action) => {
  let newState;
  switch (action.type) {
    /*case SET_VISFILTER_COL: {
      const boolean = Object.assign({}, action.data);
      newState = Object.assign({}, state, Object.assign({}, state.displayColDialog: boolean));
      return newState;
    }*/
    case SET_VISFILTER_POSTIT: {
      const visfilter = Object.assign({}, action.data);
      return visfilter;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
