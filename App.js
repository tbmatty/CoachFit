/**
 * IMPORTS
 */

import React from 'react';
import type { Node } from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



/**
 *  SCREENS
 */
const ClientWorkoutScreen = ({ navigation }): Node => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Workout Screen</Text>
    </View>
  );
}

const ClientMessagingScreen: () => Node = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messaging Screen</Text>
    </View>
  );
}

const ClientAccountScreen: () => Node = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Account Screen</Text>
    </View>
  );
}




/**
 * NAVIGATION
 */

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ClientHomeTabs: () => Node = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Todays Workout" component={ClientWorkoutScreen} options={{ headerShown: false }}></Tab.Screen>
      <Tab.Screen name="Message Coach" component={ClientMessagingScreen} options={{ headerShown: false }}></Tab.Screen>
      <Tab.Screen name="Account" component={ClientAccountScreen} options={{ headerShown: false }}></Tab.Screen>
    </Tab.Navigator>
  );
}

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ClientHomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};


/**
 * STYLES
 */
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
