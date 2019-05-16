import 'react-native';
import React from 'react';

import TriviaScreen from '../TriviaScreen';
import { AnswerOptionList } from '../components';
import { LIMIT } from '../../../api';

// Note: test renderer must be required after react-native.
import { render, act } from 'react-native-testing-library';

describe('<TriviaScreen />', () => {
  it('render list and answer questions', () => {
    jest.useFakeTimers();

    const navigation = {
      navigate: jest.fn(),
    };

    const component = render(<TriviaScreen navigation={navigation} />);
    const answerOptionList = component.getByType(AnswerOptionList);

    for (let i = 0; i < LIMIT; i++) {
      act(() => {
        const option = answerOptionList.props.options[0];
        answerOptionList.props.onOptionPress(option);
        jest.runAllTimers();
      });
    }
  });
});
