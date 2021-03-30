import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

// Initialize firebase
import firebaseConfig from './lib/firebase';
firebase.initializeApp(firebaseConfig);

// Screens
import CulturesScreen from './screens/Cultures';
import InsightsScreen from './screens/Insights';

const Navigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Cultures">
        <Navigator.Screen name="Cultures" component={CulturesScreen} />
        {/*
        <Navigator.Screen
          name="Categories"
          component={CategoriesScreen}
          options={({ route }) => ({
            title: route.params.culture.name
          })}
        />
        */}
        <Navigator.Screen
          name="Insights"
          component={InsightsScreen}
          options={({ route }) => ({
            title: route.params.category.name
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
}
