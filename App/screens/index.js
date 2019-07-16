import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthStack from './Auth';
import HomeStack from './Home';

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: createAppContainer(AuthStack),
      Home: createAppContainer(HomeStack),
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
