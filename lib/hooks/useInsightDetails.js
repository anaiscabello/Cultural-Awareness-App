// Libraries
import { getInsightDetails } from '../insights';
import useNetworkRequest from './useNetworkRequest';

/**
 * Provides a network request state for fetching the details of an insight
 * @param {String} insightId
 * @param {Array} dependencies 
 * @returns {[boolean, Error|null, Insight]}
 */
export default function useInsightDetails(insightId, dependencies = []) {
    // Use the network request hook with getInsightsForCulture()
    // Default response is an empty list
    return useNetworkRequest(() => getInsightDetails(insightId), [], dependencies);
}