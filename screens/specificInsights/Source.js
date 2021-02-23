// Libraries
import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
  },
});

export default function SingleSource({ source }) {
  return (
    <View style={styles.container}>
        <Text>{source.title}</Text>
    </View>
  )
}
