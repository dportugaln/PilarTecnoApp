import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import Login from '../screens/Auth/Login';
import { UseSelector, useSelector } from 'react-redux';
import { appSelector } from '../redux/AppRedux';
import List from '../screens/Lists/Lists';
import ListDetail from '../screens/Lists/ListDetail';

const Stack = createStackNavigator();

const AppStack = () => {
  const isLogged = useSelector(appSelector.jwt);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogged ? (
        <Stack.Screen name="Stack" component={Tabs} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
      <Stack.Screen name='List' component={List} />
      <Stack.Screen name='ListDetail' component={ListDetail} />
    </Stack.Navigator>
  );
};

export default AppStack;