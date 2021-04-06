// Libraries
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Fuse from 'fuse.js';
import _ from 'lodash';

// Components
import List from './categories/List';
import Toolbar from './cultures/Toolbar';
import Description from './categories/Description';

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  emptyContainer: {
    padding: 20,
    textAlign: 'center',
  },
  emptyContainerText: {
    textAlign: 'center',
    color: '#999',
  }
});

/**
 * Takes in a search parameter and filters the list of cultures
 * @param {Array<String>} categories
 * @param {String} search 
 */
function searchCategories(categories, search) {
  let filtered = categories;
  if (search) {
    // Use Fuse.js to perform a fuzzy search
    const fuse = new Fuse(filtered, {
      includeScore: true,
    });
    filtered = fuse.search(search).map((fuseObject) => fuseObject.item);
  }
  return filtered;
}

export default function Categories({ route, navigation }) {
  // The list of categories in the state
  const culture = route.params.culture;
  const [ searchFilteredCategories, setSearchFilteredCategories ] = useState([]);
  const [ searchInput, setSearchInput] = useState('');

  // Every time search input changes, re search
  useEffect(() => {
    setSearchFilteredCategories(searchCategories(culture.categories, searchInput));
  }, [searchInput]);

  return (
    <View style={styles.container}>
      <Toolbar onSearch={setSearchInput} />
      <Description culture={culture} />
      {(searchFilteredCategories.length > 0) ? <List culture={culture} categories={searchFilteredCategories} /> : <View style={styles.emptyContainer}>
        <Text style={styles.emptyContainerText}>We couldn't find any relevant categories.</Text>
      </View>}
    </View>
  );
}
