// Libraries
import React from 'react';
import { StyleSheet, View } from 'react-native';
import _ from 'lodash';
import KeyInsight from './specificInsights/KeyInsight';
import Source from './specificInsights/Source';

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
      <View>
        <Text>{insight.title}</Text>
      </View>
      <View>
        <View>
          <Text>{insight.confidenceScore.title}</Text>
        </View>
        <View>
          <Text>{insight.numVotes}/{insight.totalVotes} votes</Text>
        </View>
      </View>
      <View>
        <Text>KEY INSIGHTS</Text>
      </View>
      
      <View>
        {insight.keyInsights.map((ki) => {
        return <KeyInsight keyInsight={ki} />;})}
      </View>

      <View>
        <Text>{insight.description}</Text>
      </View>

      <View>
        <Text>SOURCES</Text>
      </View>

      <View>
        {insight.sources.map((ss) => {
        return <Source source={ss} />;})}
      </View>

      <View>
        <Text>Sources verified by {insight.sourcesVerifiedBy}</Text>
      </View>
    </View>
  );
}
