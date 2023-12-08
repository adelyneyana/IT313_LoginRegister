import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
3


import NavigationStack from './src/config/navigate';
import globalstyles from "./src/config/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();  

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
      </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create(globalstyles);