import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/navigation/index';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </PersistGate>
    </Provider>
  );
}
