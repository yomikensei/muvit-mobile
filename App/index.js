/* eslint-disable global-require */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { PersistorProvider } from './services/contexts';
import Navigator from './screens';

import configureStore from './configureStore';

const reduxStore = configureStore();

class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      ...Ionicons.font,
    });
  }

  render() {
    return (
      <Provider store={reduxStore.store}>
        <PersistGate persistor={reduxStore.persistor}>
          <PersistorProvider value={{ persistor: reduxStore.persistor }}>
            <Navigator />
          </PersistorProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
