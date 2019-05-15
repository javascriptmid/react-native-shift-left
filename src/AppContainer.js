import { createStackNavigator, createAppContainer } from 'react-navigation';

import { HomeScreen, TriviaScreen } from './components';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Trivia: TriviaScreen,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
