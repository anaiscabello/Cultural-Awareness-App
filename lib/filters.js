import AsyncStorage from '@react-native-async-storage/async-storage';

const FILTER_OPTIONS_KEY = '@filterOptions';
const DEFAULT_FILTER_OPTIONS = {
    search: '',
}

/**
 * @typedef FilterOptions
 * @param {String} search
 */

/**
 * Returns the filter options stored in the user's device
 * @returns {FilterOptions}
 */
export function getDeviceFilterOptions() {
    return new Promise((resolve) => {
        return AsyncStorage
            .getItem(FILTER_OPTIONS_KEY)
            .then((str) => {
                resolve(JSON.parse(str));
            })
            .catch((e) => {
                // no options are stored, return default
                resolve(DEFAULT_FILTER_OPTIONS);
            });
    });
}

/**
 * Sets the filter options in user's device
 * @param {FilterOptions} filterOptions 
 */
export function setDeviceFilterOptions(filterOptions) {
    AsyncStorage
        .setItem(FILTER_OPTIONS_KEY, JSON.stringify(filterOptions));
}