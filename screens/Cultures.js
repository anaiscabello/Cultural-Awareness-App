import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';

// Library
import { getCultures } from '../lib/cultures';

// Components
import List from './cultures/List';
import LoadingIndicator from '../components/LoadingIndicator';
import Error from '../components/Error';

/**
 * Takes in a list of cultures, and filters it according to
 * provided options
 * @param {Array<Culture>} cultures 
 */
function filterCultures(cultures) {
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
  const [ cultures, setCultures ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  // Get the list of cultures
  useEffect(() => {
    setLoading(true); // Start loading
    setError(null); // No error yet
    getCultures()
      .then((newCultures) => {
        // Filter cultures and set them in state
        setCultures(filterCultures(newCultures));
        setError(null); // Everything went smoothly
      })
      .catch((e) => {
        // Something went wrong when fetching cultures
        setError(e);
        // TODO error handling
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // Only call this effect once (during the first render)

  return (
    <View style={styles.container}>
      {error && <Error error={error} />}
      {loading && <LoadingIndicator />}
      {!loading && <List sections={cultures} />}
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
