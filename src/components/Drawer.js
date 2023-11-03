/* import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home';
import AppStack from '../routes/index';
import DrawerMenu from './DrawerMenu';
import Maps from '../screens/Map/Maps';
import ListDetail from '../screens/Lists/listDetail';
import Lists from '../screens/Lists/Lists';

const MyDrawer = createDrawerNavigator(); // Rename the variable to MyDrawer

export default function DrawerComponent() { // Rename the component function to DrawerComponent
  return (
    <MyDrawer.Navigator>
      <MyDrawer.Screen name="Home" component={AppStack} options={{ headerShown: false }} />
      <MyDrawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <MyDrawer.Screen name="Lists" component={Lists} options={{ headerShown: false }} />
      <MyDrawer.Screen name="Maps" component={Maps} options={{ headerShown: false }} />
      <MyDrawer.Screen name="ListDetail" component={ListDetail} options={{ headerShown: false }} />
    </MyDrawer.Navigator>
  );
}
 */