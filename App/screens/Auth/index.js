import { createStackNavigator } from 'react-navigation';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Landing from './screens/Landing';

export default createStackNavigator(
  {
    //   Splash: {
    //     screen: Splash,
    //     navigationOptions: {
    //       header: null,
    //     },
    //   },
    Landing: {
      screen: Landing,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Landing',
  },
);
