import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/color';
import { Cart, Details, EditPassword, EditPage, HomePage, MyProfile, EditData, MyPurchases } from '../screens/index';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const BottomTab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      activeColor={Colors.primary.primary}
      inactiveColor={"#616161"}
      barStyle={{ backgroundColor: '#FFF' }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Meu Perfil"
        component={MyProfileNavigator}
        options={{
            tabBarLabel: 'Meu Perfil',
            tabBarIcon: ({ color }) => <TabBarIcon name="account" color={color} />,
        }}
      />

    </BottomTab.Navigator>
  );
}

function TabBarIcon({ name, color }) {
  return <MaterialCommunityIcons size={26} name={name} color={color} />;
}

const FeedStack = createStackNavigator()

function HomeNavigator() {
  return (
    <FeedStack.Navigator screenOptions={{headerShown: false}}>
      <FeedStack.Screen
        name="Home"
        component={HomePage}
        options={
          {
            headerTitle: 'Home',
            headerStyle: { backgroundColor: '#FFFF' },
            headerTitleStyle: { fontSize: 20, color: "#414141" }
          }
        }
      />
      <FeedStack.Screen
        name="Details"
        component={Details}
        options={
          {
            headerTitle: 'Details',
            headerStyle: { backgroundColor: '#ccc' },
          }
        }
      />
      <FeedStack.Screen
        name="Cart"
        component={Cart}
        options={
          {
            headerTitle: 'Cart',
            headerStyle: { backgroundColor: '#ccc' },
          }
        }
      />
    </FeedStack.Navigator>
  );
}

function MyProfileNavigator() {
  return (
    <FeedStack.Navigator screenOptions={{headerShown: false}}>
      <FeedStack.Screen
        name="MyProfile"
        component={MyProfile}
        options={
          {
            headerTitle: 'EditPage',
            headerStyle: { backgroundColor: '#FFFF' },
            headerTitleStyle: { fontSize: 20, color: "#414141" }
          }
        }
      />
      <FeedStack.Screen
        name="EditPage"
        component={EditPage}
        options={
          {
            headerTitle: 'MyProfile',
            headerStyle: { backgroundColor: '#FFFF' },
            headerTitleStyle: { fontSize: 20, color: "#414141" }
          }
        }
      />
      <FeedStack.Screen
        name="EditPassword"
        component={EditPassword}
        options={
          {
            headerTitle: 'EditPassword',
            headerStyle: { backgroundColor: '#FFFF' },
            headerTitleStyle: { fontSize: 20, color: "#414141" }
          }
        }
      />
      <FeedStack.Screen
        name="EditData"
        component={EditData}
        options={
          {
            headerTitle: 'EditData',
            headerStyle: { backgroundColor: '#FFFF' },
            headerTitleStyle: { fontSize: 20, color: "#414141" }
          }
        }
      />
      <FeedStack.Screen
        name="MyPurchases"
        component={MyPurchases}
        options={
          {
            headerTitle: 'MyPurchases',
            headerStyle: { backgroundColor: '#FFFF' },
            headerTitleStyle: { fontSize: 20, color: "#414141" }
          }
        }
      />
    </FeedStack.Navigator>
  );
}
