import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import CulturesScreen from './screens/Cultures';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cultures">
        <Stack.Screen name="Cultures" component={CulturesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}