// Library
import { useState, useCallback, useEffect } from 'react';
import useListOfCultures from './useListOfCultures';
import { getDeviceFilterOptions, OnFilterOptionsChanged } from '../filters';

/**
 * Filters the given cultures according to device filter options
 * @param {Promise<Array<Culture>>} cultures 
 */
function filterCultures(filters, cultures) {
    // If any categories are disabled, exclude those cultures
    if (filters.disabledCategoryIds && filters.disabledCategoryIds.length) {
        return cultures.filter((culture) => filters.disabledCategoryIds.indexOf(culture.categoryId) === -1);
    }
    return cultures;
}

/**
 * Provides a filtered list of cultures according to user preferences
 * Updates the list automatically when filters are changed
 * @param {Array} dependencies 
 * @returns {[boolean, Error|null, Array<Culture>]}
 */
export default function useFilteredCultures(dependencies = []) {
    const [ loading, error, cultures ] = useListOfCultures(dependencies);
    const [ filtered, setFiltered ] = useState([]);
    const [ filterOptions, setFilterOptions ] = useState({});

    // Load initial filter options
    useEffect(() => {
        getDeviceFilterOptions().then(setFilterOptions);
    }, []);

    // Filter cultures whenever { cultures } changes
    useEffect(() => {
        setFiltered(filterCultures(filterOptions, cultures));
    }, [cultures, filterOptions]);

    // Filter cultures whenever filter options change on the device
    useEffect(() => {
        const handleChange = () => getDeviceFilterOptions().then(setFilterOptions);
        OnFilterOptionsChanged.add(handleChange);
        return () => {
            OnFilterOptionsChanged.remove(handleChange);
        };
    }, []);

    return [ loading, error, filtered ];
}