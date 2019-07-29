import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabBar from '../../components/TabBar';
import ListDeliveries from './screens/Deliveries/screens/ListDeliveries';
// import ListPayments from './screens/Payments/screens/ListPayments';
import Profile from './screens/Profile';
import ListCards from './screens/Cards/screens/ListCards';
// import ListSettings from './screens/Settings/screens/ListSettings';
import colors from '../../constants/colors';

const App = createBottomTabNavigator(
  {
    Delivery: {
      screen: ListDeliveries,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="box-open" size={18} color={tintColor} />
        ),
      }),
    },
    // Payment: {
    //   screen: ListPayments,
    //   navigationOptions: () => ({
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name="money-bill-wave" size={18} color={tintColor} />
    //     ),
    //   }),
    // },
    Cards: {
      screen: ListCards,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="credit-card" size={18} color={tintColor} />
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
