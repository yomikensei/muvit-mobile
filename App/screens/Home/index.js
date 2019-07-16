import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import DeliveryTasks from './screens/DeliveryTask';
import Profile from './screens/Profile';

const styles = StyleSheet.create({
  icon: {
    color: '#ffffff',
    marginBottom: 10,
  },
});

const RouteConfigs = {
  DeliveryTasks: {
    screen: DeliveryTasks,
    navigationOptions: () => ({
      tabBarIcon: () => <Icon name="md-list-box" style={styles.icon} />,
    }),
  },
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      tabBarIcon: () => <Icon name="md-contact" style={styles.icon} />,
    }),
  },
};

const MaterialBottomTabNavigatorConfig = {
  initialRouteName: 'DeliveryTasks',
  activeColor: '#ffffff',
  inactiveColor: '#f4f4f4',
  barStyle: { backgroundColor: '#006DEF' },
};

export default createMaterialBottomTabNavigator(RouteConfigs, MaterialBottomTabNavigatorConfig);
