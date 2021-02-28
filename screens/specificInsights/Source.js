// Libraries
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    padding: 10,
    paddingLeft: 0,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  iconContainer:{
    width: 20,
  },
  textContainer:{
    flex: 1,
  }
  
});

export default function SingleSource({ source }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
          <Text>{source.title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </View>
    </View>
  )
}
