import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/color';
import { Cart, Details, EditPassword, EditPage, HomePage, MyProfile, EditData, MyPurchases } from '../screens/index';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { UseLangContext } from '../contexts/LangContext';

const BottomTab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
  const { texts } = UseLangContext();

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
          tabBarLabel: texts.inicio,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={texts.meu_perfil}
        component={MyProfileNavigator}
        options={{
            tabBarLabel: texts.meu_perfil,
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
  const { texts } = UseLangContext();
  return (
    <FeedStack.Navigator screenOptions={{headerShown: false}}>
      <FeedStack.Screen
        name="Home"
        component={HomePage}
        options={
          {
            headerTitle: texts.inicio,
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
            headerTitle: texts.detalhes,
            headerStyle: { backgroundColor: '#ccc' },
          }
        }
      />
      <FeedStack.Screen
        name="Cart"
        component={Cart}
        options={
          {
            headerTitle: texts.carrinho,
            headerStyle: { backgroundColor: '#ccc' },
          }
        }
      />
    </FeedStack.Navigator>
  );
}

function MyProfileNavigator() {
  const { texts } = UseLangContext();
  return (
    <FeedStack.Navigator screenOptions={{headerShown: false}}>
      <FeedStack.Screen
        name="MyProfile"
        component={MyProfile}
        options={
          {
            headerTitle: texts.meu_perfil,
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
            headerTitle: texts.edit_page,
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
            headerTitle: texts.edit_pass,
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
            headerTitle: texts.edit_data,
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
            headerTitle: texts.my_purchases,
            headerStyle: { backgroundColor: '#FFFF' },
            headerTitleStyle: { fontSize: 20, color: "#414141" }
          }
        }
      />
    </FeedStack.Navigator>
  );
}
