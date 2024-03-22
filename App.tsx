/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import AuthStack from './src/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
