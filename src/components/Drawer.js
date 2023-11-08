import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { HomeStackScreen } from '../routes/HomeStack';
import { ProfileStackScreen } from '../routes/ProfileStack';
import { ListsStackScreen } from '../routes/ListsStack';
import { MapStackScreen } from '../routes/MapStack';

const Drawer = createDrawerNavigator();


const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const CustomDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* Define your drawer items here */}
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      <Drawer.Screen name="Lists" component={ListsStackScreen} />
      <Drawer.Screen name="Map" component={MapStackScreen} />
    </Drawer.Navigator>
  );
}

export default CustomDrawer;
