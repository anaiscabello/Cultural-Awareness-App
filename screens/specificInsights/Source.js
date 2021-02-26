// Libraries
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    padding: 10,
    paddingLeft: 0,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
});

export default function SingleSource({ source }) {
  return (
    <View style={styles.container}>
        <Text>{source.title}</Text>
    </View>
  )
}
