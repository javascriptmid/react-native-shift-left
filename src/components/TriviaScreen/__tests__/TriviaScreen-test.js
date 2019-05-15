import 'react-native';
import React from 'react';

import TriviaScreen from '../TriviaScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<TriviaScreen />', () => {
  it('renders correctly', () => {
    renderer.create(<TriviaScreen />);
  });
});
