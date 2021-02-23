// Libraries
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Fuse from 'fuse.js';
import _ from 'lodash';

// Library
import useListOfInsights from '../lib/hooks/useListOfInsights';

// Components
import List from './insights/List';
import LoadingIndicator from '../components/LoadingIndicator';
import Error from '../components/Error';
import Toolbar from './insights/Toolbar';

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
 * Takes in a search parameter and filters the list of insights
 * @param {Array<Insight>} insights
 * @param {String} search 
 */
function searchInsights(insights, search) {
  let filtered = insights;
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

export default function Insights({ route, navigation }) {
  // The list of insights in the state
  const culture = route.params.culture;
  const [ loading, error, insights ] = useListOfInsights(culture.id, [culture.id]); // Only fetch the list of insights during first render
  const [ searchFilteredInsights, setSearchFilteredInsights ] = useState([]);
  const [ searchInput, setSearchInput] = useState('');

  // Every time a new list of cultures is received or filters change, re search
  useEffect(() => {
    setSearchFilteredInsights(searchInsights(insights, searchInput));
  }, [insights, searchInput]);

  return (
    <View style={styles.container}>
      <Toolbar onSearch={setSearchInput} />
      {(loading || searchFilteredInsights.length > 0) ? false : <View style={styles.emptyContainer}>
        <Text style={styles.emptyContainerText}>There are no insights for this culture yet.</Text>
      </View>}
      {error && <Error error={error} />}
      {loading && <LoadingIndicator />}
      {!loading && <List insights={searchFilteredInsights} />}
    </View>
  );
}
