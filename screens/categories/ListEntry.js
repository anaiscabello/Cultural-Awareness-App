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
    iconContainer:{
        alignSelf: 'center',
        width: 24,
        marginLeft: 5,
    },
});

export default function ListEntry({ culture, category }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Insights', {culture, category})}>
            <View style={styles.container}>        
                <View style={styles.titleContainer}>
                    <Text>{category}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="chevron-forward" size={20} color="#999" />
                </View>
            </View>
        </TouchableOpacity>
    );
}

ListEntry.propTypes = {
    category: PropTypes.string.isRequired,
};