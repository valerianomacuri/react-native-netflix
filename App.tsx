import 'react-native-gesture-handler';

import React from 'react'
import { Navigation } from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App
