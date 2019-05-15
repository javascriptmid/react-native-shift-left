import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Button({ title, ...props }) {
  return (
    <TouchableOpacity {...props} style={styles.Button}>
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}
