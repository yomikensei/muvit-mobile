import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import AuthStack from './Auth';
import HomeStack from './Home';

export const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Auth: createAppContainer(AuthStack),
      Home: createAppContainer(HomeStack),
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

export const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(
  createReduxContainer(AppNavigator),
);

export default AppWithNavigationState;
