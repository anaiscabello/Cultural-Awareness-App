// Libraries
import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Components
import ListEntry from './ListEntry';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});

export default function List({ insights }) {
  return (
    <View style={styles.container}>
        {insights.map((insight) => {
            return (
                <ListEntry key={insight.title} insight={insight} />
            );
        })}
    </View>
  )
}

List.propTypes = {
  insights: PropTypes.arrayOf(ListEntry.propTypes.insight).isRequired,
};
