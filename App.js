import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Screens
import CulturesScreen from './screens/Cultures';
import InsightsScreen from './screens/Insights';
import CreateInsightScreen from './screens/CreateInsight';
import WorldMapScreen from './screens/WorldMap';
import InfoScreen from './screens/Info';
import SettingsScreen from './screens/Settings';
import InsightScreen from './screens/Insight';

const Tab = createBottomTabNavigator();
const CulturesStack = createStackNavigator();

/*
function renderIcon(route, { focused, color, size }) {
  let iconName;
  
  // Decide which icon to render
  switch (route.name) {
    case 'World Map':
      iconName = focused ? 'globe' : 'globe-outline';
      break;
    case 'Cultures':
      iconName = focused ? 'ios-people-circle' : 'ios-people-circle-outline';
      break;
    default:
      iconName = focused ? 'information-circle' : 'information-circle-outline';
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
}
*/

function CulturesStackScreen() {
  return (
    <CulturesStack.Navigator initialRouteName="Cultures">
      <CulturesStack.Screen name="Cultures" component={CulturesScreen} />
      <CulturesStack.Screen name="Create an Insight" component={CreateInsightScreen} />
      <CulturesStack.Screen
        name="Insights"
        component={InsightsScreen}
        options={({ route }) => ({
          title: route.params.culture.title
        })}
      />
      <CulturesStack.Screen name="Filter Cultures" component={SettingsScreen} />
      <CulturesStack.Screen
        name="Insight"
        component={InsightScreen}
        options={({ route }) => ({
          title: route.params.insight.title
        })}
      />
    </CulturesStack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={({ route }) => ({
        //   tabBarIcon: (options) => renderIcon(route, options),
        // })}
        // tabBarOptions={{
        //   activeTintColor: 'blue',
        //   inactiveTintColor: 'gray',
        // }}
        initialRouteName="Cultures"
  
      >
        <Tab.Screen name=" " component={CulturesStackScreen} />
        {/* <Tab.Screen name="World Map" component={WorldMapScreen} />
        <Tab.Screen name="Info" component={InfoScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
