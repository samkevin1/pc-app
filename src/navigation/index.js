import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login/index';
import UserRegister from '../screens/Auth/Register/index';
import HomePage from '../screens/Authenticated/HomePage/index';
import BottomTabNavigator from './bottomTabNavigator';

import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

export default function Routes() {
  const { token } = useSelector((s) => s.auth);

  if(token)
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Register"
          component={UserRegister}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
