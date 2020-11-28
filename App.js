import React, { useState } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import { View } from 'react-native';
import Routes from './src/navigation/index';
import { LangContextWrapper } from "./src/contexts/LangContext";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LangContextWrapper>
          <View style={{ flex: 1 }}>
            <Routes />
          </View>
        </LangContextWrapper>
      </PersistGate>
    </Provider>
  );
}
