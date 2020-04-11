import {
  PUSH_SNACKBAR,
  SHIFT_SNACKBAR,
  CLOSE_SNACKBAR,
  CLEAR_SNACKBAR,
} from 'actions/snackbars';

const initialState = [];

const snackbarReducer = (state = initialState, action) => {
  let newSnacks = [];
  switch (action.type) {
    case PUSH_SNACKBAR:
      return [...state, action.snack];

    case CLOSE_SNACKBAR:
      const [currentSnack] = state || [];
      newSnacks = [...state];
      newSnacks.shift();
      return [{ closed: true, ...currentSnack }, ...newSnacks];

    case SHIFT_SNACKBAR:
      newSnacks = [...state];
      newSnacks.shift();
      return newSnacks;

    case CLEAR_SNACKBAR:
      const { message: messageNonGrata } = action || {};
      newSnacks = state.filter(({ message }) => message !== messageNonGrata);
      return newSnacks;

    default:
      return state;
  }
};

export default snackbarReducer;
