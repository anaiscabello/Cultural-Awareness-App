// Libraries
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Fuse from 'fuse.js';
import _ from 'lodash';
import { Ionicons } from '@expo/vector-icons'; 

// Library
import { getDeviceFilterOptions, setDeviceFilterOptions, OnFilterOptionsChanged } from '../lib/filters';
import useFilteredCultures from '../lib/hooks/useFilteredCultures';

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
    flexDirection: 'row'
  },
  toolbarSearchContainer: {
    flex: 1,
  },
  toolbarFilterContainer: {
    position: 'relative',
    width: 40,
    paddingTop: 7,
    paddingLeft: 12
  },
  filterBadge: {
    position: 'absolute',
    top: 5,
    right: 0,
    width: 15,
    height: 15,
    fontSize: 12,
    borderRadius: 7.5,
    backgroundColor: 'tomato',
  },
  filterBadgeText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
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
  const [ filterBadge, setFilterBadge ] = useState(0);

  // Every time a new list of cultures is received or filters change, re search
  useEffect(() => {
    setSearchFilteredCultures(searchCultures(cultures, searchInput));
  }, [cultures, searchInput]);

  // Every time a new list is filtered, sectionize it
  // and create a search index
  useEffect(() => {
    setSections(sectionizeCultures(searchFilteredCultures));
  }, [searchFilteredCultures]);

  // Reflect the number of filters applied in the filter badge
  useEffect(() => {
    const handleChange = () => {
      getDeviceFilterOptions().then((options) => {
        setFilterBadge(options.disabledCategoryIds ? options.disabledCategoryIds.length : 0);
      });
    };

    OnFilterOptionsChanged.add(handleChange);
    handleChange();

    return () => OnFilterOptionsChanged.remove(handleChange);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.toolbarContainer}>
        <View style={styles.toolbarSearchContainer}>
          <SearchBar
            placeholder='Search'
            onInput={setSearchInput}
          />
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate('Filter Cultures')}}>
          <View style={styles.toolbarFilterContainer}>
            <Ionicons name="ios-filter-sharp" size={24} color="black" />
            {filterBadge > 0 ? <View style={styles.filterBadge}>
              <Text style={styles.filterBadgeText}>{filterBadge}</Text>
            </View> : false}
          </View>
        </TouchableOpacity>
      </View>
      {searchFilteredCultures.length ? false : <View style={styles.emptyContainer}>
        <Text style={styles.emptyContainerText}>We couldn't find any relevant cultures. Did you check your filters?</Text>
      </View>}
      {error && <Error error={error} />}
      {loading && <LoadingIndicator />}
      {!loading && <List sections={sections} />}
    </View>
  );
}
