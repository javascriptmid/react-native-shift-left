import React from 'react';
import { ThemeProvider } from 'react-native-elements';

import AppContainer from './AppContainer';

export default function Application() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}
