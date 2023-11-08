import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import { Tabs } from './Tabs';
import CustomDrawer from '../components/Drawer';

const Stack = createStackNavigator();

const AppStack = (props) => {
  const isLogged = true;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogged ? (
        <Stack.Screen name="AppStack" component={CustomDrawer} /> // Use CustomDrawer here
      ) : (
        <Stack.Screen name="LogIn" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
