// Libraries
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import _ from 'lodash';

// Components
import KeyInsight from './specificInsights/KeyInsight';
import Source from './specificInsights/Source';

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

export default function Insight({ route }) {
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
          <Text>{insight.numVotes}/{insight.totalVoters} votes</Text>
        </View>
      </View>
      <View>
        <Text>KEY INSIGHTS</Text>
      </View>
      
      <View>
        {insight.keyInsights.map((ki, i) => {
        return <KeyInsight key={i} keyInsight={ki} />;})}
      </View>

      <View>
        <Text>{insight.description}</Text>
      </View>

      <View>
        <Text>SOURCES</Text>
      </View>

      <View>
        {insight.sources.map((ss) => {
        return <Source key={ss.title} source={ss} />;})}
      </View>

      <View>
        <Text>Sources verified by {insight.sourcesVerifiedBy}</Text>
      </View>
    </View>
  );
}
