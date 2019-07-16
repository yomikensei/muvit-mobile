import { createDrawerNavigator } from 'react-navigation';
import Home from './screens/Home';
import CreateDeliveryTask from './screens/CreateDeliveryTask';

export default createDrawerNavigator(
  {
    DeliveryTask: {
      screen: Home,
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
    initialRouteName: 'DeliveryTask',
  },
);
