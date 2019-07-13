import { createDrawerNavigator } from 'react-navigation';
import Dashboard from './Dashboard';
import CreateDeliveryTask from './CreateDeliveryTask';

export default createDrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    CreateDeliveryTask: {
      screen: CreateDeliveryTask,
    },
  },
  {
    initialRouteName: 'Dashboard',
  },
);
