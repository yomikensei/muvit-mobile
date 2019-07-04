import { createDrawerNavigator } from 'react-navigation'
import CreateDeliveryTask from './CreateDeliveryTask';

export default createDrawerNavigator(
  {
    CreateDeliveryTask: {
      screen: CreateDeliveryTask,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'CreateDeliveryTask',
  },
);
