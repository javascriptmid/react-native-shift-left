import React from 'react';
import { View, SafeAreaView } from 'react-native';

import styles from './styles';

export default function Page({ children, ...props }) {
  return (
    <SafeAreaView style={styles.Page}>
      <View {...props} style={styles.Page}>
        {children}
      </View>
    </SafeAreaView>
  );
}
