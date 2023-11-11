import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Profile from '../screens/Profile/Profile';
import AppStack from '../routes/index';
import List from '../screens/Lists/Lists';
import Maps from '../screens/Map/Maps';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
 
  return (

    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={AppStack} options={{ headerShown: false }}/>
      <Drawer.Screen name="Profile" component={Profile}  options={{ headerShown: false }}/>
      <Drawer.Screen name="List" component={List} options={{ headerShown: false }}/>
      <Drawer.Screen name="Maps" component={Maps} options={{ headerShown: false }}/>
    </Drawer.Navigator>

  );
}

export default CustomDrawer;
