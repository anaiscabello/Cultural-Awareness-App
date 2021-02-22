// Libraries
import { getInsightsForCulture } from '../insights';
import useNetworkRequest from './useNetworkRequest';

/**
 * Provides a network request state for fetching the list of insights for a culture
 * @param {String} cultureId
 * @param {Array} dependencies 
 * @returns {[boolean, Error|null, Array<Insight>]}
 */
export default function useListOfInsights(cultureId, dependencies = []) {
    // Use the network request hook with getInsightsForCulture()
    // Default response is an empty list
    return useNetworkRequest(() => getInsightsForCulture(cultureId), [], dependencies);
}