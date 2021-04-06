// Libraries
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View , StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons'; 

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        padding: 10,
        paddingLeft: 0,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        borderBottomWidth: 1,
        flexDirection: "row",
    },
    titleContainer:{
        justifyContent: "flex-start",
        alignContent: "center",
        flexDirection: "row",
        flex: 1,
    },
    confidenceScoreContainer:{
        width: 24,
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    confidenceScore: {
        alignSelf: 'center',
        width: 15,
        height: 15,
        borderRadius: 7.5,
    },
    iconContainer:{
        alignSelf: 'center',
        width: 24,
        marginLeft: 5,
    },
});


export default function ListEntry({ insight }) {
    return (
        <View style={styles.container}>        
            <View style={styles.titleContainer}>
                <Text>{insight.text}</Text>
            </View>
        </View>
    );
}

ListEntry.propTypes = {
    insight: PropTypes.shape({
        text: PropTypes.string.isRequired,
    }).isRequired,
};
