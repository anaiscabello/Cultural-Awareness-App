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
    numInsightsContainer:{
        width: 30,
        backgroundColor: "#999",
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        padding: 3,
    },
    numInsightsText:{
        color: "#FFFFFF"
    },
    iconContainer:{
        width: 24,
        marginLeft: 5,
    },
});


export default function ListEntry({ culture }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Insights', {culture})}>
            <View style={styles.container}>        
                <View style={styles.titleContainer}>
                    <Text>{culture.title}</Text>
                </View>
                <View style={styles.numInsightsContainer}> 
                    <Text style={styles.numInsightsText}>{culture.numInsights}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="chevron-forward" size={20} color="#999" />
                </View>
            </View>
        </TouchableOpacity>
    );
}

ListEntry.propTypes = {
    culture: PropTypes.shape({
        title: PropTypes.string.isRequired,
        numInsights: PropTypes.number.isRequired,
    }).isRequired,
};
