/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { PersistorProvider } from 'services/contexts';
import Navigator from './screens';

import configureStore from './configureStore';

const reduxStore = configureStore();

export default () => {
  const loadFonts = async () => {
    await Font.loadAsync({
      ...Ionicons.font,
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Provider store={reduxStore.store}>
      <PersistGate persistor={reduxStore.persistor}>
        <PersistorProvider value={{ persistor: reduxStore.persistor }}>
          <Navigator />
        </PersistorProvider>
      </PersistGate>
    </Provider>
  );
};
