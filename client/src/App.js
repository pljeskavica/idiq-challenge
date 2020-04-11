import React from 'react';
// Providers
import { Provider } from 'react-redux';
// Containers
import Homepage from 'containers/Homepage';
import SnackbarController from 'containers/SnackbarController';

import store from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <Homepage />
      <SnackbarController />
    </Provider>
  );
};

export default App;
