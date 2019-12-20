/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import RNPaystack from 'react-native-paystack';
import Config from 'react-native-config';
// eslint-disable-next-line import/no-unresolved
import App from './App';
import { name as appName } from './app.json';
import BackgroundMessaging from './App/BackgroundMessaging';

const { PAYSTACK_KEY_PUBLIC } = Config;

const customTextProps = {
  style: {
    color: '#6a6e75',
    letterSpacing: 0.1,
    fontFamily: 'Raleway-Medium',
  },
  allowFontScaling: false,
};

const customTextInputProps = {
  style: {
    color: '#6a6e75',
    letterSpacing: 0.1,
    fontFamily: 'Raleway-Medium',
  },
  allowFontScaling: false,
};

setCustomTextInput(customTextInputProps);
setCustomText(customTextProps);
console.disableYellowBox = true;

RNPaystack.init({ publicKey: PAYSTACK_KEY_PUBLIC });

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => BackgroundMessaging);
