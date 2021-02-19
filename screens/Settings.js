// Libraries
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';

// Components
import ToggleSelect from '../components/ToggleSelect';
import Error from '../components/Error';
import LoadingIndicator from '../components/LoadingIndicator';

// Library
import { getDeviceFilterOptions, setDeviceFilterOptions } from '../lib/filters';
import useListOfCultureCategories from '../lib/hooks/useListOfCultureCategories';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryFilters: {
  },
  categoryFilterContainer: {
    width: '100%', 
  }
});


export default function Settings({ route }) {
  const [ loading, error, categories ] = useListOfCultureCategories([]);
  const [ currentFilters, setCurrentFilters ] = useState({});

  useEffect(() => {
    // When categories are loaded, check which ones have been previously disabled
    getDeviceFilterOptions().then((filters) => {
      setCurrentFilters(categories.reduce((previous, current) => {
          previous[current.id] = true;
          // If this category exists in the filters, then user disabled it
          if (filters.disabledCategoryIds && filters.disabledCategoryIds.length) {
            if (filters.disabledCategoryIds.indexOf(current.id) !== -1) {
              previous[current.id] = false;
            }
          }
        return previous;
      }, {}));
    });
  }, [categories]); // get saved filters

  const onToggleCategory = (id) => {
    const newFilters = {
      ...currentFilters,
      [id]: !currentFilters[id],
    };
    setCurrentFilters(newFilters);

    // Update filters in device storage
    getDeviceFilterOptions()
      .then((filters) => {
        return setDeviceFilterOptions({
          ...filters,
          disabledCategoryIds: Object.keys(newFilters).filter((key) => !newFilters[key]),
        })
      });
  }

  return (
    <View style={styles.container}>
      {error && <Error error={error} />}
      {loading && <LoadingIndicator />}
      {!loading && <View style={styles.categoryFilters}>
        {categories.map((category) => <View key={category.id} style={styles.categoryFilterContainer}>
          <ToggleSelect
            title={category.title}
            value={currentFilters[category.id]}
            onToggle={() => onToggleCategory(category.id)}
          />
        </View>)}
      </View>}
    </View>
  );
}