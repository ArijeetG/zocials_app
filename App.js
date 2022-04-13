/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './screens/Home';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return(
    <ThemeProvider>
    <Home />
    </ThemeProvider>
  )
};

export default App;
