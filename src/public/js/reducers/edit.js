import { SHOW_EDIT_DIALOG, HIDE_EDIT_DIALOG } from '../constants/action-types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_EDIT_DIALOG: {
      return {
        id: action.data.id,
        title: action.data.title,
        description: action.data.description,
        columnId: action.data.columnId,
        requirements: action.data.requirements,
        color: action.data.color,
        displayEditDialog: true };
    }
    case HIDE_EDIT_DIALOG: {
      return { displayEditDialog: false };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
