import React from 'react';
import { View } from 'react-native';

import testProperties from '../../testProperties';

import Page from '../Page';
import Button from '../Button';

import { TitleLogo } from './components';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const handleTriviaPlay = () => {
    return navigation.navigate('Trivia');
  };

  return (
    <View style={styles.Background}>
      <Page {...testProperties('home-screen')}>
        <View style={styles.Content}>
          <TitleLogo />

          <Button
            {...testProperties('start-playing-button')}
            onPress={handleTriviaPlay}
            title="START PLAYING"
          />
        </View>
      </Page>
    </View>
  );
}
