// Libraries
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';

// Components
import NavigationContainer from '../components/NavigationContainer';

export default function WorldMap({ route }) {
  return (
    <NavigationContainer activeTab={NavigationContainer.Tabs.WorldMap}>
      <View style={styles.container}>
        <Text>Nothing to see here!</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
