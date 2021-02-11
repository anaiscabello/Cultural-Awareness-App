// Libraries
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

export default function ListEntry({ culture }) {
    return (
        <View>
            <Text>{culture.title}</Text>
            <Text>{culture.numInsights}</Text>
        </View>
    );
}

ListEntry.propTypes = {
    culture: PropTypes.shape({
        title: PropTypes.string.isRequired,
        numInsights: PropTypes.number.isRequired,
    }).isRequired,
};
