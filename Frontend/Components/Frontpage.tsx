import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../features/users/login';
import { Signup } from '../features/users/signup';
import { Problems } from '../features/problems/problems';

const Stack = createStackNavigator();

export function MyStack () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen name="login" options={{ title: 'Welcome to Boligfy' }} component={Login}/>
                <Stack.Screen name="signup" component={Signup}/>
                <Stack.Screen name="problems" component={Problems}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}