import React from 'react';
import { Button } from 'react-native-elements';

import testProperties from '../../../../testProperties';

export default function AnswerOptionList({ options, onOptionPress }) {
  const handleOptionPress = option => {
    return () => onOptionPress(option);
  };

  return options.map(option => (
    <Button
      {...testProperties('answer-option')}
      onPress={handleOptionPress(option)}
      containerStyle={{ marginBottom: 12 }}
      key={option.number}
      title={option.text}
    />
  ));
}
