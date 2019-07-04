import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Signup from './Signup';
import Landing from './Landing';

export default createStackNavigator(
  {
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
