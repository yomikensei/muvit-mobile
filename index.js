/**
 * @format
 */

import { AppRegistry } from 'react-native';
import {
  setCustomText,
  setCustomTextInput,
} from 'react-native-global-props';
import App from './App';
import { name as appName } from './app.json';

const customTextProps = {
  style: {
    color: '#6a6e75',
    letterSpacing: 0.1,
    fontFamily: 'Raleway-Medium',
  },
};

const customTextInputProps = {
  style: {
    color: '#6a6e75',
    letterSpacing: 0.1,
    fontFamily: 'Raleway-Medium',
  },
};

setCustomTextInput(customTextInputProps);
setCustomText(customTextProps);
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
