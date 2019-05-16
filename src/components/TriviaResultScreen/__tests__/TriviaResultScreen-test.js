import 'react-native';
import React from 'react';
import { Button, Text } from 'react-native-elements';

import TriviaResultScreen from '../TriviaResultScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<TriviaResultScreen />', () => {
  it('display as winner', () => {
    const navigation = {
      state: {
        params: {
          isWinner: true,
        },
      },
    };

    const component = renderer.create(
      <TriviaResultScreen navigation={navigation} />
    );

    const textTree = component.root.findByType(Text);
    expect(textTree.props.children).toBe('Soy intelectual muy inteligente!');
  });

  it('display as looser', () => {
    const navigation = {
      state: {
        params: {
          isWinner: false,
        },
      },
    };

    const component = renderer.create(
      <TriviaResultScreen navigation={navigation} />
    );

    const textTree = component.root.findByType(Text);
    expect(textTree.props.children).toBe(
      'Eres tonto como una piedra y feo como una blasfemia'
    );
  });

  it('restarts the trivia', () => {
    const navigation = {
      state: {
        params: {
          isWinner: true,
        },
      },
      navigate: jest.fn(),
    };

    const component = renderer.create(
      <TriviaResultScreen navigation={navigation} />
    );

    const buttonTree = component.root.findByType(Button);

    buttonTree.props.onPress();
    expect(navigation.navigate).toBeCalledWith('Home');
  });
});
