import 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';

import AnswerOptionList from '../AnswerOptionList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<AnswerOptionList />', () => {
  it('handle option press', () => {
    const onOptionPress = jest.fn();
    const options = [
      {
        number: 1,
        text: 'test',
      },
    ];

    const component = renderer.create(
      <AnswerOptionList onOptionPress={onOptionPress} options={options} />
    );

    const buttonTree = component.root.findByType(Button);
    buttonTree.props.onPress();
  });
});
