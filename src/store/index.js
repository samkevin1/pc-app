import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import { persistStore, persistReducer, createTransform } from "redux-persist";
import storageWeb from "redux-persist/lib/storage";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { Platform } from "react-native";

import { parse, stringify } from "flatted/esm";

// const storage = Platform.OS === "web" ? storageWeb : AsyncStorage;

var storage = Platform.select({
  web: storageWeb,
  default: ExpoFileSystemStorage,
});

const transformCircular = createTransform(
  (inboundState, key) => stringify(inboundState),
  (outboundState, key) => parse(outboundState)
);

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["business"],
  transforms: [transformCircular],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
