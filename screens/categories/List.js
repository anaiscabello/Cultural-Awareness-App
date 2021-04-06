// Libraries
import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import ListEntry from './ListEntry';

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
});

export default function List({ culture, categories }) {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>CATEGORIES</Text>
      </View>
      <View style={styles.listContainer}>
          {categories.map((category) => {
            return (
                <ListEntry key={category} culture={culture} category={category} />
            );
          })}
      </View>
    </View>
  )
}

List.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
