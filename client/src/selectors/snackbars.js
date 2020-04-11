import { createSelector } from 'reselect';

export const getSnackbars = createSelector(
  ({ snackbars = [] }) => snackbars,
  snackbars => snackbars,
);
