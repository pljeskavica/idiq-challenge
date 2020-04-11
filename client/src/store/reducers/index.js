import { combineReducers } from 'redux';
// Reducers
import siteList from './siteList';
import snackbars from './snackbars';

export default combineReducers({
  siteList,
  snackbars,
});
