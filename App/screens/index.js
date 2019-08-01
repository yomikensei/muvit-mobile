import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import AuthStack from './Auth';
import Home from './Home';
import AuthLoadingScreen from './AuthLoadingScreen';

import CreateCard from './Home/screens/Cards/screens/CreateCard';

import NewDelivery from './Home/screens/Deliveries/screens/NewDelivery';
import ViewDeliveryPricing from './Home/screens/Deliveries/screens/ViewDeliveryPricing';
import ViewDelivery from './Home/screens/Deliveries/screens/ViewDelivery';

import OrderRide from './Home/screens/Rides/screens/NewRide';
import ViewRidePricing from './Home/screens/Rides/screens/ViewRidePricing';
import ViewRide from './Home/screens/Rides/screens/ViewRide';

const HomeStack = createStackNavigator({
  HomeTab: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
    }),
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: () => ({
      header: null,
    }),
  },
  NewDelivery: {
    screen: NewDelivery,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ViewDeliveryPricing: {
    screen: ViewDeliveryPricing,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ViewDelivery: {
    screen: ViewDelivery,
    navigationOptions: () => ({
      header: null,
    }),
  },
  OrderRide: {
    screen: OrderRide,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ViewRidePricing: {
    screen: ViewRidePricing,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ViewRide: {
    screen: ViewRide,
    navigationOptions: () => ({
      header: null,
    }),
  },
}, {
  initialRouteName: 'HomeTab',
});

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
