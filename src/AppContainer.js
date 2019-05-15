import { createStackNavigator, createAppContainer } from 'react-navigation';

import { HomeScreen } from './components';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
