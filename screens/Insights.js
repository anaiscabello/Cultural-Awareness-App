// Libraries
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';

export default function Insights({ route }) {
  return (
    <View style={styles.container}>

      <Text style={{ fontWeight: 'bold', fontSize: 22 }}>African American</Text>

      <Text style={{ color: 'lightgreen' }}>Trustworthy</Text>
      <Text style={{ color: 'lightgrey', textAlign: 'right' }}>11/12 votes</Text>


      <Text style={{ fontWeight: 'bold', color: 'lightgrey' }}>KEY INSIGHTS</Text>
      <View
        style={{
          borderBottomWidth: 1,
        }}
      />

      <Text>Key Insight 1</Text>
      <View
        style={{
          borderBottomWidth: 1,
        }}
      />

      <Text>Key Insight 2</Text>
      <View
        style={{
          borderBottomWidth: 1,
        }}
      />

      <Text>Our Actionable Brand solution offers game changers a suite of immersive offerings. We aim to globally engineer our architecture by strategically synergising our knowledge transfer competitive stakeholders. You need to dynamically invest your bandwidths to increase your best practice velocity. Our business grows organic growths to reliably and effectively incentivize our mobile stack.</Text>
      <View
        style={{
          borderBottomWidth: 1,
        }}
      />

      <Text style={{ fontWeight: 'bold', color: 'lightgrey' }}>SOURCES</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
