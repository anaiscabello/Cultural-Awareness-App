// Libraries
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

const styles = StyleSheet.create({
  container: {
      padding: 10,
      marginLeft: 10,
      borderBottomColor: '#f9f9f9',
      borderBottomWidth: 1,
      flexDirection: 'row',
  },
  titleContainer: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignContent: 'center'
  },
  title: {},
  switchContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      flexDirection: 'row'
  },
});


export default function ToggleSelect({ title, value, onToggle }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.switchContainer}>
                <Switch
                    trackColor={{ false: "#999", true: "#34C759" }}
                    thumbColor="#fff"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={onToggle}
                    value={value}

                />
            </View>
        </View>
    )
}