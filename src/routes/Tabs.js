import React, { Component } from 'react'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStackScreen } from './HomeStack'
import { ProfileStackScreen } from './ProfileStack'
import { MapStackScreen } from './MapStack'
import { ListsStackScreen } from './ListsStack'
import { Icon } from 'react-native-elements'


const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return (
    
        <Tab.Navigator
            activeColor={'black'}
            inactiveColor={'white'}
            barStyle={{
                backgroundColor: '#1782E0'
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'home'} type="font-awesome-5" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={ProfileStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'user'} type="font-awesome-5" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Lists" component={ListsStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'marker'} type="font-awesome-5" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Map" component={MapStackScreen} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name={'map'} type="font-awesome-5" size={20} color={color} />
                ),
            }}
            />
        </Tab.Navigator>
        
    );
};

export default Tabs;