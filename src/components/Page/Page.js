import React from 'react';
import { View, SafeAreaView } from 'react-native';

import styles from './styles';

export default function Page({ children }) {
  return (
    <SafeAreaView style={styles.Page}>
      <View style={styles.Page}>{children}</View>
    </SafeAreaView>
  );
}
