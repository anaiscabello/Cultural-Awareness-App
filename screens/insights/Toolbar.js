// Libraries
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Components
import SearchBar from '../../components/SearchBar';

// Styles
const styles = StyleSheet.create({
  toolbarContainer: {
    height: 60,
    padding: 10,
    backgroundColor: '#F9F9F9',
    flexDirection: 'row'
  },
  toolbarSearchContainer: {
    flex: 1,
  },
});

export default function Toolbar({ onSearch }) {
  return (
    <View style={styles.toolbarContainer}>
      <View style={styles.toolbarSearchContainer}>
        <SearchBar
          placeholder='Search'
          onInput={onSearch}
        />
      </View>
    </View>
  );
}