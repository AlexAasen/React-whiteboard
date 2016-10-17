import { SET_VISFILTER_COL,  SET_VISFILTER_POSTIT } from '../constants/action-types';

const initialState = { displayDialog: false, displayColDialog: false }
const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_VISFILTER_COL: {
      const boolean = Object.assign({}, action.data);
      newState = Object.assign({}, state, Object.assign({}, state.displayColDialog: boolean));
      return newState;
    }
    case SET_VISFILTER_POSTIT: {
      const boolean = Object.assign({}, action.data);
      newState = Object.assign({}, state, Object.assign({}, state.displayDialog: boolean));
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
