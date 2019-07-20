import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabBar from '../../components/TabBar';
import DeliveryHistory from './screens/DeliveryHistory';
import Profile from './screens/Profile';
import colors from '../../constants/colors';

const App = createBottomTabNavigator(
  {
    Delivery: {
      screen: DeliveryHistory,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list-alt" size={18} color={tintColor} />
        ),
      }),
    },
    Payment: {
      screen: DeliveryHistory,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="credit-card" size={18} color={tintColor} />
        ),
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="users" size={18} color={tintColor} />
        ),
      }),
    },
    Settings: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cogs" size={18} color={tintColor} />
        ),
      }),
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: colors.tabBar.text.active,
      inactiveTintColor: colors.tabBar.text.inactive,
    },
  },
);

export default createAppContainer(App);
