import 'react-native';
import React from 'react';

import HomeScreen from '../HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Button from '../../Button';

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    renderer.create(<HomeScreen />);
  });

  it('starts trivia', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const component = renderer.create(<HomeScreen navigation={navigation} />);
    const buttonTree = component.root.findByType(Button);

    buttonTree.props.onPress();
    expect(navigation.navigate).toBeCalledWith('Trivia');
  });
});
