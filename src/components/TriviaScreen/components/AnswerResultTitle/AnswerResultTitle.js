import React from 'react';
import { Text } from 'react-native-elements';

export default function AnswerResultTitle({ isCorrect }) {
  return (
    <Text
      style={{ textAlign: 'center', color: isCorrect ? 'green' : 'red' }}
      h4
    >
      {isCorrect ? 'CORRECTO!' : 'FALLASTE!'}
    </Text>
  );
}
