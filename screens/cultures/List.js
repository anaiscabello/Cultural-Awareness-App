// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { View } from 'react-native';

// Components
import ListSection from './ListSection';

export default function List({ sections }) {
    return (
        <View>
            {_.keys(sections).map((letter) => {
                return <ListSection key={letter} letter={letter} cultures={sections[letter]} />;
            })}
        </View>
    );
}

List.propTypes = {
    sections: PropTypes.objectOf(
        ListSection.propTypes.cultures
    ).isRequired,
};
