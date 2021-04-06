// Libraries
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Fuse from 'fuse.js';
import _ from 'lodash';

// Components
import List from './insights/List';
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
function searchInsights(insights, category, search) {
  let filtered = insights.filter(insights => insights.category === category);
  if (search) {
    // Use Fuse.js to perform a fuzzy search
    const fuse = new Fuse(filtered, {
      includeScore: true,
      keys: ['text']
    });
    filtered = fuse.search(search).map((fuseObject) => fuseObject.item);
  }
  return filtered;
}

export default function Insights({ route, navigation }) {
  // The list of insights in the state
  const culture = route.params.culture;
  const category = route.params.category;
  const [ searchFilteredInsights, setSearchFilteredInsights ] = useState([]);
  const [ searchInput, setSearchInput] = useState('');

  // Every time a new list of cultures is received or filters change, re search
  useEffect(() => {
    setSearchFilteredInsights(searchInsights(culture.insights, category, searchInput));
  }, [searchInput]);

  return (
    <View style={styles.container}>
      <Toolbar onSearch={setSearchInput} />
      {(searchFilteredInsights.length > 0) ? <List insights={searchFilteredInsights} /> : <View style={styles.emptyContainer}>
        <Text style={styles.emptyContainerText}>There are no insights for this culture yet.</Text>
      </View>}
    </View>
  );
}
