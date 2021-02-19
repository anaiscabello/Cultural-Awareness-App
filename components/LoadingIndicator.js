// Libraries
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function LoadingIndicator() {
    return (
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
            <ActivityIndicator size="large" color="tomato" />
        </View>
    )
}