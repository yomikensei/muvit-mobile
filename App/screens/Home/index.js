import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { RFValue } from 'react-native-responsive-fontsize';
import ListDeliveries from './screens/Deliveries/screens/ListDeliveries';
import Profile from './screens/Profile';
import ListCards from './screens/Cards/screens/ListCards';
import Hail from './screens/Hail';

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
    Delivery: {
      screen: ListDeliveries,
      navigationOptions: () => ({
        tabBarLabel: 'Deliveries',
        tabBarIcon: ({ tintColor }) => <Icon name="box-open" size={18} color={tintColor} />,
      }),
    },

    Cards: {
      screen: ListCards,
      navigationOptions: () => ({
        tabBarLabel: 'Cards',
        tabBarIcon: ({ tintColor }) => <Icon name="credit-card" size={18} color={tintColor} />,
      }),
    },
    Settings: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="cogs" size={18} color={tintColor} />,
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
  },
);

export default createAppContainer(App);
