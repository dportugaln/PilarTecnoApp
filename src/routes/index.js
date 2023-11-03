import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Auth/Login'
import { Tabs } from './Tabs';


const Stack = createStackNavigator();


export default AppStack = (props) => {
    const isLogged = true
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            {
                true? (
                    <Stack.Screen name="AppStack" component={Tabs} />
                ) : (
                    <Stack.Screen name="LogIn" component={Login} />
                )}
                
        </Stack.Navigator>
    )
}