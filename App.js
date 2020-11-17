import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/navigation/index';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
}
