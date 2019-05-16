import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

import testProperties from '../../testProperties';

import Page from '../Page';
import styles from './styles';

export default function TriviaResultScreen({ navigation }) {
  const handleResetTrivia = () => {
    return navigation.navigate('Home');
  };

  return (
    <Page {...testProperties('trivia-result-screen')}>
      <View style={styles.Content}>
        <Text style={{ textAlign: 'center' }} h4>
          {navigation.state.params.isWinner
            ? 'Soy intelectual muy inteligente!'
            : 'Eres tonto como una piedra y feo como una blasfemia'}
        </Text>

        <Button title="VOLVER A COMENZAR" onPress={handleResetTrivia} />
      </View>
    </Page>
  );
}
