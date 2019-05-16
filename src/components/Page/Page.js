import React from 'react';
import { View, SafeAreaView } from 'react-native';

import styles from './styles';

export default function Page({ children, ...props }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View {...props} style={styles.Page}>
        {children}
      </View>
    </SafeAreaView>
  );
}
