// Libraries
import React, { useState, useCallback, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import _ from 'lodash';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#E0E0E0',
        padding: 10,
        borderRadius: 10,
    },
    iconContainer: {
        width: 20,
        marginRight: 8,
    },
    resetContainer: {
        width: 24,
        marginLeft: 8,
    },
    inputContainer: {
        flex: 1,
    },
    input: {
        flex: 1,
        color: '#333',
    }
});

/**
 * Renders a search bar
 * @param {Function} onInput called whenever input changes (after debounce) 
 * @param {String} placeholder
 * @param {Number} debounceDelay the minimum delay between successive onInput calls
 */
export default function SearchBar({ onInput, placeholder = 'Search', debounceDelay = 300 }) {
    const [value, setValue] = useState('');

    // call onInput after debounce
    const debouncedOnInput = useCallback(_.debounce(onInput, debounceDelay), [onInput]);
    useEffect(() => {
        debouncedOnInput(value); // whenever value changes, call onInput()
    }, [value])

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name="search" size={20} color="#333333" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setValue(text)}
                    value={value}
                    placeholder={placeholder}
                />
            </View>
            {value ? <TouchableOpacity onPress={() => {
                setValue('');
                Keyboard.dismiss();
            }}>
                <View style={styles.resetContainer}>
                    <Ionicons name="close-circle-outline" size={20} color="#333333" />
                </View>
            </TouchableOpacity> : false}
        </View>
    )
}