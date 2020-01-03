import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import {createReduxContainer} from 'react-navigation-redux-helpers';
import {connect} from 'react-redux';
import NotificationWrapper from '../components/NotificationWrapper';

import AuthStack from './Auth';
import Home from './Home';
import AuthLoadingScreen from './AuthLoadingScreen';

import OngoingOrder from './Home/screens/Hail/OngoingOrder';
import Searching from './Home/screens/Hail/Searching';

const HomeStack = createStackNavigator(
  {
    HomeTab: {
      screen: Home,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Searching: {
      screen: Searching,
      navigationOptions: () => ({
        header: null,
      }),
    },
    OngoingOrder: {
      screen: OngoingOrder,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'HomeTab',
    headerMode: 'none',
  },
);

export const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: createAppContainer(AuthStack),
      Home: createAppContainer(HomeStack),
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

const mapStateToProps = state => ({
  state: state.nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(createReduxContainer(AppNavigator));

export default NotificationWrapper(AppWithNavigationState);
