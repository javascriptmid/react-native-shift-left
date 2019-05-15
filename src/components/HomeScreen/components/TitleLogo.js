import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { images } from '../../../assets';

export default function TitleLogo() {
  return <Image style={styles.TitleLogo} source={images.simpsonsLogo} />;
}

const styles = StyleSheet.create({
  TitleLogo: {
    resizeMode: 'contain',
    width: 256,
    maxHeight: 192,
  },
});
