// Libraries
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import _ from 'lodash';

// Components
import KeyInsight from './specificInsights/KeyInsight';
import Source from './specificInsights/Source';
import ConfidenceScore from './specificInsights/ConfidenceScore';



// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
  },
  subHeadingContainer:{
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1,
  },

  
  greyText:{
    color: "#3C3C4399"
  },
  blueText:{
    color: "#006DFF"
  },
  sectionContainer:{
    paddingTop: 15,
    paddingBottom: 15,
  },

});

export default function Insight({ route }) {
  /** @type {Insight} */
  const insight = route.params.insight;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text>{insight.title}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <ConfidenceScore insight={insight} />
        </View>
        <View style={styles.subHeadingContainer}>
          <Text style={styles.greyText}>KEY INSIGHTS</Text>
        </View>
        
        <View>
          {insight.keyInsights.map((ki, i) => {
          return <KeyInsight key={i} keyInsight={ki} />;})}
        </View>

        <View style={styles.sectionContainer}>
          <Text>{insight.description}</Text>
        </View>

        <View style={styles.subHeadingContainer}>
          <Text style={styles.greyText}>SOURCES</Text>
        </View>

        <View>
          <View>
            {insight.sources.map((ss) => {
            return <Source key={ss.title} source={ss} />;})}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.greyText}>Sources verified by <Text style={styles.blueText}>{insight.sourcesVerifiedBy}</Text></Text>
        
        </View>
      </ScrollView>
    </View>
  );
}
