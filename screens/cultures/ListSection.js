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
  listContainer: {},
});

export default function ListSection({ letter, cultures }) {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeaderContainer}>
        <Text>{letter.toUpperCase()}</Text>
      </View>
      <View style={styles.listContainer}>
          {cultures.map((culture) => {
            return (
                <ListEntry key={culture.title} culture={culture} />
            );
          })}
      </View>
    </View>
  )
}

ListSection.propTypes = {
  letter: PropTypes.string.isRequired,
  cultures: PropTypes.arrayOf(ListEntry.propTypes.culture).isRequired,
};
