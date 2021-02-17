// Libraries
import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

/**
 * Define identifiers for each possible tab
 */
const ACTIVE_TABS = {
    WorldMap: 'world_map',
    Cultures: 'cultures',
    Info: 'info',
};

/**
 * Specific information regarding each tab: their identifier, title, icon, and onPress action
 */
const TABS = [
    {
        id: ACTIVE_TABS.WorldMap,
        title: "Map",
        onPress: (navigation) => { navigation.navigate('WorldMap') },
        icon: (size, color) => <Ionicons style={styles.navbarTabIcon} name="globe-outline" size={size} color={color} />,
    },
    {
        id: ACTIVE_TABS.Cultures,
        title: "Cultures",
        onPress: (navigation) => { navigation.navigate('Cultures') },
        icon: (size, color) => <Ionicons style={styles.navbarTabIcon} name="ios-people" size={size} color={color} />,
    },
    {
        id: ACTIVE_TABS.Info,
        title: "Info",
        onPress: (navigation) => { navigation.navigate('Info') },
        icon: (size, color) => <Ionicons style={styles.navbarTabIcon} name="information-circle-outline" size={size} color={color} />,
    },
];

const TAB_ICON_SIZE = 26;
const TAB_INACTIVE_COLOR = '#999999';
const TAB_ACTIVE_COLOR = '#007AFF';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    scrollContainer: {},
    navBarContainer: {
        height: 70,
        flexDirection: "row",
        backgroundColor: "#F9F9F9",
        borderTopColor: "#999999",
        borderTopWidth: 1,
    },
    navBarTab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    navBarTabActive: {},
    navbarTabInactive: {},
    navbarTabIcon: {
        alignSelf: "center",
    },
    navbarTabTitle: {},
    navbarTabTitleActive: {
        color: TAB_ACTIVE_COLOR,
    },
    navbarTabTitleInactive: {
        color: TAB_INACTIVE_COLOR,
    },
});

function NavigationTab({ tab, isActive }) {
    // allow navigation from tabs
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => tab.onPress(navigation)} style={{flex: 1}}>
            <View style={[styles.navBarTab, (isActive ? styles.navBarTabActive : styles.navbarTabInactive)]}>
                {tab.icon(TAB_ICON_SIZE, isActive? TAB_ACTIVE_COLOR: TAB_INACTIVE_COLOR)}
                <Text style={[styles.navbarTabTitleActive, (isActive ? styles.navbarTabTitleActive : styles.navbarTabTitleInactive)]}>
                    {tab.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default function NavigationContainer({ activeTab = TABS.Cultures, children }) {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <ScrollView style={styles.scrollContainer}>
                    {children}
                </ScrollView>
            </View>
            <View style={styles.navBarContainer}>
                {TABS.map((tab) => <NavigationTab key={tab.id} tab={tab} isActive={activeTab == tab.id} />)}
            </View>
        </View>
    )
}

// Export Tabs constants
NavigationContainer.Tabs = ACTIVE_TABS;