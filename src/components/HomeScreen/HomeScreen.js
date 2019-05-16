import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import testProperties from '../../testProperties';

import Page from '../Page';

import { TitleLogo } from './components';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const handleTriviaPlay = () => {
    return navigation.navigate('Trivia');
  };

  return (
    <Page {...testProperties('home-screen')}>
      <View style={styles.Content}>
        <TitleLogo />

        <Button
          {...testProperties('start-playing-button')}
          type="outline"
          onPress={handleTriviaPlay}
          title="START PLAYING"
        />
      </View>
    </Page>
  );
}
