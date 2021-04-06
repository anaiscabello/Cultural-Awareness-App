// Libraries
import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  sectionHeaderContainer: {
    padding: 10,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1,
  },
  sectionHeader:{
    color: "#3C3C43",
    fontWeight: "bold",
  },
  listContainer: {},
  descriptionContainer:{
    marginLeft: 10,
    padding: 10,
    paddingLeft: 0,
    flexDirection: "row",
  },
  description:{
      justifyContent: "flex-start",
      alignContent: "center",
      flexDirection: "row",
      flex: 1,
  },
});

export default function Description({ culture }) {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>DESCRIPTION</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{culture.description}</Text>
      </View>
    </View>
  )
}