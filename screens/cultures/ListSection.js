// Libraries
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

// Components
import ListEntry from './ListEntry';

export default function ListSection({ letter, cultures }) {
  return (
    <View>
      <Text>{letter.toUpperCase()}</Text>
      <View>
          {cultures.map((culture) => {
            return (
                <ListEntry key={culture.title} culture={culture} />
            );
          })}
      </View>
    </View>
  )
}

ListSection.propTypes = {
  letter: PropTypes.string.isRequired,
  cultures: PropTypes.arrayOf(ListEntry.propTypes.culture).isRequired,
};
