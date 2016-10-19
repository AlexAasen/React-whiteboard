import { SHOW_DIALOG, HIDE_DIALOG } from '../constants/action-types';

const initialState = {
  displayDialog: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DIALOG: {
      return { displayDialog: true };
    }
    case HIDE_DIALOG: {
      return { displayDialog: false };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
