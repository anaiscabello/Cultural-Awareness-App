import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';

// Library
import useListOfCultures from '../lib/hooks/useListOfCultures';

// Components
import List from './cultures/List';
import LoadingIndicator from '../components/LoadingIndicator';
import Error from '../components/Error';

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

export default function Cultures({ route }) {
  // The list of cultures in the state
  const [ loading, error, cultures ] = useListOfCultures([]); // Only fetch the list of cultures during first render
  const [ sections, setSections ] = useState({});

  // Every time a new list of cultures is received, sectionize it
  useEffect(() => {
    setSections(sectionizeCultures(cultures));
  }, [cultures]);

  return (
    <View style={styles.container}>
      {error && <Error error={error} />}
      {loading && <LoadingIndicator />}
      {!loading && <List sections={sections} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
