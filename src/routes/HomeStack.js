import React, { Component } from 'react';
import Home from '../screens/Home/index'

import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown:false}}>
            <HomeStack.Screen name="HomeStack" component={Home} />

        </HomeStack.Navigator>
    )
}