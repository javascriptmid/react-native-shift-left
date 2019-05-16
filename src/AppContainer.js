import { createStackNavigator, createAppContainer } from 'react-navigation';

import { HomeScreen, TriviaScreen, TriviaResultScreen } from './components';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Trivia: TriviaScreen,
    TriviaResult: TriviaResultScreen,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
