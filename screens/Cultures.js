// Libraries
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Fuse from 'fuse.js';
import _ from 'lodash';

// Library
import useFilteredCultures from '../lib/hooks/useFilteredCultures';

// Components
import List from './cultures/List';
import LoadingIndicator from '../components/LoadingIndicator';
import Error from '../components/Error';
import Toolbar from './cultures/Toolbar';

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
 * Takes in a list of cultures, and separates them based on their first letter (alphabetically)
 * @param {Array<Culture>} cultures 
 */
function sectionizeCultures(cultures) {
    const sorted = _.sortBy(cultures, (c) => c.title);
    const sections = {};

    sorted.forEach((culture) => {
        const letter = culture.title.slice(0, 1).toUpperCase();
        // Initialize this particular letter in the sections hashmap
        sections[letter] = (letter in sections) ? sections[letter] : [];
        sections[letter].push(culture);
    });

    return sections;
}

/**
 * Takes in a search parameter and filters the list of cultures
 * @param {Array<Culture>} cultures
 * @param {String} search 
 */
function searchCultures(cultures, search) {
  let filtered = cultures;
  if (search) {
    // Use Fuse.js to perform a fuzzy search
    const fuse = new Fuse(filtered, {
      includeScore: true,
      keys: ['title'],
    });
    filtered = fuse.search(search).map((fuseObject) => fuseObject.item);
  }
  return filtered;
}

export default function Cultures({ route, navigation }) {
  // The list of cultures in the state
  const [ loading, error, cultures ] = useFilteredCultures([]); // Only fetch the list of cultures during first render
  const [ searchFilteredCultures, setSearchFilteredCultures ] = useState([]);
  const [ searchInput, setSearchInput] = useState('');
  const [ sections, setSections ] = useState({});

  // Every time a new list of cultures is received or filters change, re search
  useEffect(() => {
    setSearchFilteredCultures(searchCultures(cultures, searchInput));
  }, [cultures, searchInput]);

  // Every time a new list is filtered, sectionize it
  // and create a search index
  useEffect(() => {
    setSections(sectionizeCultures(searchFilteredCultures));
  }, [searchFilteredCultures]);

  return (
    <View style={styles.container}>
      <Toolbar onSearch={setSearchInput} />
      {(loading || searchFilteredCultures.length > 0) ? false : <View style={styles.emptyContainer}>
        <Text style={styles.emptyContainerText}>We couldn't find any relevant cultures. Did you check your filters?</Text>
      </View>}
      {error && <Error error={error} />}
      {loading && <LoadingIndicator />}
      {!loading && <List sections={sections} />}
    </View>
  );
}
