// Libraries
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import _ from 'lodash';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

// Library
import { getDeviceFilterOptions, OnFilterOptionsChanged } from '../../lib/filters';

// Components
import SearchBar from '../../components/SearchBar';

// Styles
const styles = StyleSheet.create({
  toolbarContainer: {
    height: 60,
    padding: 10,
    backgroundColor: '#F9F9F9',
    flexDirection: 'row'
  },
  toolbarSearchContainer: {
    flex: 1,
  },
  toolbarFilterContainer: {
    position: 'relative',
    width: 40,
    paddingTop: 7,
    paddingLeft: 12
  },
  filterBadge: {
    position: 'absolute',
    top: 5,
    right: 0,
    width: 15,
    height: 15,
    fontSize: 12,
    borderRadius: 7.5,
    backgroundColor: 'tomato',
  },
  filterBadgeText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default function Toolbar({ onSearch }) {
  const [ filterBadge, setFilterBadge ] = useState(0);
  const navigation = useNavigation();

  // Reflect the number of filters applied in the filter badge
  useEffect(() => {
    const handleChange = () => {
      getDeviceFilterOptions().then((options) => {
        setFilterBadge(options.disabledCategoryIds ? options.disabledCategoryIds.length : 0);
      });
    };

    OnFilterOptionsChanged.add(handleChange);
    handleChange();

    return () => OnFilterOptionsChanged.remove(handleChange);
  }, [])

  return (
    <View style={styles.toolbarContainer}>
      <View style={styles.toolbarSearchContainer}>
        <SearchBar
          placeholder='Search'
          onInput={onSearch}
        />
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('Filter Cultures')}}>
        <View style={styles.toolbarFilterContainer}>
          <Ionicons name="ios-filter-sharp" size={24} color="black" />
          {filterBadge > 0 ? <View style={styles.filterBadge}>
            <Text style={styles.filterBadgeText}>{filterBadge}</Text>
          </View> : false}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Submit an Insight')}}>
        <View style={styles.toolbarFilterContainer}>
          <Ionicons name="ios-add-circle-outline" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}