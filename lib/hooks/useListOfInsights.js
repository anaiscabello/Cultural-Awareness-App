// Libraries
import { getInsights } from '../insights';
import useNetworkRequest from './useNetworkRequest';

/**
 * Provides a network request state for fetching the list of insights for a culture
 * @param {String} cultureId
 * @param {String} categoryId
 * @param {Array} dependencies 
 * @returns {[boolean, Error|null, Array<Insight>]}
 */
export default function useListOfInsights(cultureId, categoryId, dependencies = []) {
    // Use the network request hook with getInsights()
    // Default response is an empty list
    return useNetworkRequest(() => getInsights(cultureId, categoryId), [], dependencies);
}