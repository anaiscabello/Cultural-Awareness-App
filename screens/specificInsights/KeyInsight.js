// Libraries
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
  },
});

export default function KeyInsight({ keyInsight }) {
  return (
    <View style={styles.container}>
        <Text>{keyInsight}</Text>
    </View>
  )
}
