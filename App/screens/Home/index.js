import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { RFValue } from 'react-native-responsive-fontsize';
import Profile from './screens/Profile';
import Hail from './screens/Hail';
import History from './screens/History';
import Payment from './screens/Payment';

const App = createBottomTabNavigator(
  {
    Hail: {
      screen: Hail,
      navigationOptions: () => ({
        header: null,
        tabBarLabel: 'Hail',
        tabBarIcon: ({ tintColor }) => <Icon name="motorcycle" size={18} color={tintColor} />,
      }),
    },
    History: {
      screen: History,
      navigationOptions: () => ({
        tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => <Icon name="clock" size={18} color={tintColor} />,
      }),
    },

    Payment: {
      screen: Payment,
      navigationOptions: () => ({
        tabBarLabel: 'Payment',
        tabBarIcon: ({ tintColor }) => <Icon name="money-bill" size={18} color={tintColor} />,
      }),
    },
    Settings: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="user" size={18} color={tintColor} />,
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#2C3F56',
      inactiveTintColor: '#B2B8BD',
      labelStyle: {
        fontSize: RFValue(10),
        fontFamily: 'DMSans-Medium',
        margin: 0,
      },
      style: {
        height: 60,
        borderTopColor: 'transparent',
        backgroundColor: '#FCFDFF',
      },
      tabStyle: {
        marginBottom: 7,
      },
    },
    initialRouteName: 'Hail',
    lazy: false,
    resetOnBlur: true
  }
);

export default createAppContainer(App);
