import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Maps from '../screens/Map/Maps';

const MapStack = createStackNavigator();

export const MapStackScreen = () => {
    return (
        <MapStack.Navigator screenOptions={{headerShown:false}}>
            <MapStack.Screen name="MapsStack" component={Maps} />

        </MapStack.Navigator>
    )
}