// Libraries
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';

export default function Insights({ route }) {
  return (
    <View style={styles.container}>

      <Text style={{ fontWeight: 'bold', fontSize: 22 }}>African American</Text>
      <StatusBar style="auto" />
      <ActivityIndicator />
      <Text>I'm here tpo</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
