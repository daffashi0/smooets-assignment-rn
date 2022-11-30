import React from 'react';

import {StrictMode} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import Navigation from './src/navigations/Navigation';
import store from './src/store';

const App = () => {
  return (
    <StrictMode>
      <ReduxProvider store={store}>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </ReduxProvider>
    </StrictMode>
  );
};

export default App;
