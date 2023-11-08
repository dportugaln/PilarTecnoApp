/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './src/components/Drawer';
import AppStack from './src/routes/index'




const App = () => {


  return (
    
<NavigationContainer>
  <AppStack />
</NavigationContainer>
  );
}



export default App;