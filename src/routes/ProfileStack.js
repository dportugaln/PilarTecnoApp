import React, { Component } from 'react';
import Profile from '../screens/Profile/Profile'

import { createStackNavigator } from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator screenOptions={{headerShown:false}}>
            <ProfileStack.Screen name="ProfileStack" component={Profile} />

        </ProfileStack.Navigator>
    )
}