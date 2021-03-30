// Library
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    confidenceContainer:{
        flexDirection: 'row',
    },
    leftSectionContainer:{
        flex: 1
    },
    rightSectionContainer :{
        flex: 1,
        alignContent: 'flex-end',
    },
    greyText:{
        color: "#3C3C4399"
    },
});

/**
 * Renders the confidence score section of the insight page
 * @param {Insight} insight 
 */
export default function ConfidenceScore({ insight }) {
    return (
    <View style={styles.confidenceContainer}>
        <View style={styles.leftSectionContainer}>
            <Text style={{color: insight.confidenceScore.color}}>{insight.confidenceScore.title}</Text>
        </View>
        <View style={styles.rightSectionContainer}>
            <Text style={styles.greyText}>{insight.numVotes}/{insight.totalVoters} votes</Text>
        </View>
    </View>
    )
}