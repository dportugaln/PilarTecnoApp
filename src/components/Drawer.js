import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { HomeStackScreen } from '../routes/HomeStack';
import { ProfileStackScreen } from '../routes/ProfileStack';
import { ListsStackScreen } from '../routes/ListsStack';
import { MapStackScreen } from '../routes/MapStack';
import PopMenu from './PopMenu';
import Header from './Header';
import AppStack from '../routes';

const Drawer = createDrawerNavigator();


const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Header title="Pilar Tecno" />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const CustomDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home"component={HomeStackScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      <Drawer.Screen name="Lists" component={ListsStackScreen} />
      <Drawer.Screen name="Map" component={MapStackScreen} />
    </Drawer.Navigator>
  );
}

export default CustomDrawer;
