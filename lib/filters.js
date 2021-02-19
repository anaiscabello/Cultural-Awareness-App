import AsyncStorage from '@react-native-async-storage/async-storage';
import Signal from 'signals';

const FILTER_OPTIONS_KEY = '@filterOptions';
const DEFAULT_FILTER_OPTIONS = {
    disabledCategoryIds: [],
}

export const OnFilterOptionsChanged = new Signal();

/**
 * @typedef FilterOptions
 * @param {Array<String>} disabledCategoryIds
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
                const options = JSON.parse(str);
                resolve(options === null ? DEFAULT_FILTER_OPTIONS : options);
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
    return AsyncStorage
        .setItem(FILTER_OPTIONS_KEY, JSON.stringify(filterOptions))
        .then(() => {
            OnFilterOptionsChanged.dispatch(filterOptions);
        });
}