/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import InitApp from './src/common/InitApp';

const App = () => {

  console.log("Inside App")
  SplashScreen.hide();

  return (
    <InitApp />
  );
};

export default App;
