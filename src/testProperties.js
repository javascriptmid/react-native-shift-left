import { Platform } from 'react-native';

const propertyName = Platform.select({
  ios: 'testID',
  android: 'accessibilityLabel',
});

export default id => ({ [propertyName]: id });
