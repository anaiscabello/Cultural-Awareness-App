import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import CulturesScreen from './screens/Cultures';
import InsightsScreen from './screens/Insights';
import CreateInsightScreen from './screens/CreateInsight';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cultures">
        <Stack.Screen name="Cultures" component={CulturesScreen} />
        <Stack.Screen name="Insights" component={InsightsScreen} />
        <Stack.Screen name="CreateInsight" component={CreateInsightScreen} />
        <Stack.Screen name="Insight" component={CulturesScreen} />
        <Stack.Screen name="Settings" component={CulturesScreen} />
        <Stack.Screen name="WorldMap" component={CulturesScreen} />
        <Stack.Screen name="Info" component={CulturesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}