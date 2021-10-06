import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Content from './src/'
import rootReducers from "./src/state";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ['search']
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
  persistedReducer
);
const persistor = persistStore(store);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Content />
        </PersistGate>
      </Provider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
