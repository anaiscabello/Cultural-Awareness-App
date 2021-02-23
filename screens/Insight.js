// Libraries
import React from 'react';
import { StyleSheet, View } from 'react-native';
import _ from 'lodash';

// Library
import useInsightDetails from '../lib/hooks/useInsightDetails';

// Components
import LoadingIndicator from '../components/LoadingIndicator';
import Error from '../components/Error';

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

export default function Insight({ route, navigation }) {
  /** @type {Insight} */
  const insight = route.params.insight;

  return (
    <View style={styles.container}>
      {/* RENDER ELEMENT HERE */}
    </View>
  );
}
