import React, { useState, useEffect } from 'react';
import { Text } from 'react-native-elements';

import api from '../../api';
import testProperties from '../../testProperties';

import Page from '../Page';

import { AnswerOptionList, AnswerResultTitle } from './components';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const [trivia, setTrivia] = useState();
  const [userScore, setUserScore] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState();
  const [currentQuestion, setTriviaQuestion] = useState({ answers: [] });

  useEffect(() => {
    const triviaSource = api();
    setTrivia(triviaSource);
    setTriviaQuestion(triviaSource.next().value);
  }, []);

  const handleSelectQuestion = answer => {
    if (answer.number === currentQuestion.correctAnswer)
      setUserScore(userScore + 1);
    setSelectedQuestion(answer.number);
    setTimeout(handleNextQuestion, 1000);
  };

  const handleNextQuestion = () => {
    const nextQuestion = trivia.next();

    if (nextQuestion.done) {
      const score = userScore / 5;
      return navigation.navigate('TriviaResult', {
        isWinner: score > 0.5,
      });
    }

    setSelectedQuestion();
    return setTriviaQuestion(nextQuestion.value);
  };

  return (
    <Page {...testProperties('trivia-screen')}>
      <Text style={styles.Title} h4>
        {currentQuestion.text}
      </Text>

      {selectedQuestion && (
        <AnswerResultTitle
          isCorrect={selectedQuestion === currentQuestion.correctAnswer}
        />
      )}

      {!selectedQuestion && (
        <AnswerOptionList
          options={currentQuestion.answers}
          onOptionPress={handleSelectQuestion}
        />
      )}
    </Page>
  );
}
