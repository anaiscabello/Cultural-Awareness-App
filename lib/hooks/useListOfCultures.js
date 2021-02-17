// Libraries
import { getCultures } from '../cultures';
import useNetworkRequest from './useNetworkRequest';

/**
 * Provides a network request state for fetching the list of cultures
 * @param {Array} dependencies 
 * @returns {[boolean, Error|null, Array<Culture>]}
 */
export default function useListOfCultures(dependencies = []) {
    // Use the network request hook with getCultures()
    // Default response is an empty list
    return useNetworkRequest(getCultures, [], dependencies);
}