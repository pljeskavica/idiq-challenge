import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
// Middleware
import reduxThunk from 'redux-thunk';

let composeEnhancers;
if (typeof window !== `undefined`) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk)),
);

export default store;
