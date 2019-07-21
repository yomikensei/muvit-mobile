import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabBar from '../../components/TabBar';
import ListDeliveries from './screens/Deliveries/screens/ListDeliveries';
import ListPayments from './screens/Payments/screens/ListPayments';
import Profile from './screens/Profile';
import colors from '../../constants/colors';

const App = createBottomTabNavigator(
  {
    Delivery: {
      screen: ListDeliveries,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list-alt" size={18} color={tintColor} />
        ),
      }),
    },
    Payment: {
      screen: ListPayments,
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
    initialRouteName: 'Delivery',
  },
);

export default createAppContainer(App);
