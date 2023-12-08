import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../components/pages/landingPage';
import LoginPage from '../components/pages/loginPage';
import RegisterPage from '../components/pages/registerPage';
import RecoveryPage from '../components/pages/recoveryPage';
import HomePage from '../components/pages/homePage';
import { IconButton } from 'react-native-paper'; 

const Stack = createStackNavigator();

const NavigationStack = () => {
  const hideHeaderTitle = { headerShown: true };

  const backButton = (navigation) => {
    return (
      <IconButton
        icon="arrow-left"
        onPress={() => navigation.goBack()}
        color="black"
      />
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LANDING PAGE"
        component={LandingPage}
        options={hideHeaderTitle}
      />
      <Stack.Screen
        name="LOGIN PAGE"
        component={LoginPage}
        options={({ navigation }) => ({
          ...hideHeaderTitle,
          headerLeft: () => backButton(navigation),
        })}
      />
      <Stack.Screen
        name="REGISTER PAGE"
        component={RegisterPage}
        options={({ navigation }) => ({
          ...hideHeaderTitle,
          headerLeft: () => backButton(navigation),
        })}
      />
      <Stack.Screen
        name="RECOVERY PAGE"
        component={RecoveryPage}
        options={({ navigation }) => ({
          ...hideHeaderTitle,
          headerLeft: () => backButton(navigation),
        })}
      />
      <Stack.Screen
        name="HOME PAGE"
        component={HomePage}
        options={({ navigation }) => ({
          ...hideHeaderTitle,
          headerLeft: () => backButton(navigation),
        })}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;