import 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';

import HomeScreen from '../HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<HomeScreen />', () => {
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
