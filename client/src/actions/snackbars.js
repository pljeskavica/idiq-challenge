export const PUSH_SNACKBAR = 'PUSH_SNACKBAR';
export const SHIFT_SNACKBAR = 'SHIFT_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const CLEAR_SNACKBAR = 'CLEAR_SNACKBAR';

export const pushSnackbar = snack => ({
  type: PUSH_SNACKBAR,
  snack,
});

export const shiftSnackbar = () => ({
  type: SHIFT_SNACKBAR,
});

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});

export const clearSnackbarByMessage = message => ({
  type: CLEAR_SNACKBAR,
  message,
});
