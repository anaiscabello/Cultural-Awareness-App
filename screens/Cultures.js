import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fuse from 'fuse.js';
import _ from 'lodash';

// Library
import { getDeviceFilterOptions, setDeviceFilterOptions } from '../lib/filters';
import useListOfCultures from '../lib/hooks/useListOfCultures';

// Components
import List from './cultures/List';
import LoadingIndicator from '../components/LoadingIndicator';
import Error from '../components/Error';
import SearchBar from '../components/SearchBar';

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  toolbarContainer: {
    height: 60,
    padding: 10,
    backgroundColor: '#F9F9F9',
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
 * Take in filter options and filters the list of cultures
 * @param {*} cultures 
 */
function filterCultures(cultures, options = { search: '' }) {
  let filtered = cultures;

  // If a search is wanted, filter it
  if (options.search) {
    // Use Fuse.js to perform a fuzzy search
    const fuse = new Fuse(filtered, {
      includeScore: true,
      keys: ['title'],
    });
    filtered = fuse.search(options.search).map((fuseObject) => fuseObject.item);
  }
  // TODO add other filters (categories etc)
  return filtered;
}

export default function Cultures({ route }) {
  // The list of cultures in the state
  const [ loading, error, cultures ] = useListOfCultures([]); // Only fetch the list of cultures during first render
  const [ filteredList, setFilteredList ] = useState([]);
  const [ filterOptions, setFilterOptions ] = useState({});
  const [ searchInput, setSearchInput] = useState('');
  const [ sections, setSections ] = useState({});

  // Load initial filter options
  useEffect(() => {
    getDeviceFilterOptions()
      .then(setFilterOptions);
  }, []);

  // When search input changes, reflect the change in the filter options
  // (both in component and in the device storage)
  useEffect(() => {
    const newFilterOptions = {
      ...filterOptions,
      search: searchInput,
    };
    setDeviceFilterOptions(newFilterOptions);
    setFilterOptions(newFilterOptions);
  }, [searchInput]);

  // Every time a new list of cultures is received or filters change, re filter based on filter options 
  useEffect(() => {
    setFilteredList(filterCultures(cultures, filterOptions));
  }, [cultures, filterOptions]);

  // Every time a new list is filtered, sectionize it
  // and create a search index
  useEffect(() => {
    setSections(sectionizeCultures(filteredList));
  }, [filteredList]);

  return (
    <View style={styles.container}>
      <View style={styles.toolbarContainer}>
        <SearchBar
          placeholder='Search'
          onInput={setSearchInput}
        />
      </View>
      {error && <Error error={error} />}
      {loading && <LoadingIndicator />}
      {!loading && <List sections={sections} />}
    </View>
  );
}
