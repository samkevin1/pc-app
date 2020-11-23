import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login/index';
import UserRegister from '../screens/Auth/Register/index';
import HomePage from '../screens/Authenticated/HomePage/index';
import BottomTabNavigator from './bottomTabNavigator';

const Stack = createStackNavigator();

export default function Routes() {

  const loggedUser = false;

  if(loggedUser)
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
