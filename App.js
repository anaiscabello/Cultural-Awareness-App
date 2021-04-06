import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import { Text } from 'react-native';

// Initialize firebase
import firebaseConfig from './lib/firebase';
firebase.initializeApp(firebaseConfig);

// Screens
import CulturesScreen from './screens/Cultures';
import CategoriesScreen from './screens/Categories';
import InsightsScreen from './screens/Insights';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cultures">
        <Stack.Screen name="Cultures" component={CulturesScreen} />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={({ route }) => ({ title: route.params.culture.name })}
        />
        <Stack.Screen
          name="Insights"
          component={InsightsScreen}
          options={({ route }) => ({ title: route.params.category })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}