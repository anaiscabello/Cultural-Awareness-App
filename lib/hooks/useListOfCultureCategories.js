// Libraries
import { getCategories } from '../cultures';
import useNetworkRequest from './useNetworkRequest';

/**
 * Provides a network request state for fetching the list of culture categories
 * @param {Array} dependencies 
 * @returns {[boolean, Error|null, Array<CultureCategory>]}
 */
export default function useListOfCultureCategories(cultureId, dependencies = []) {
    // Use the network request hook with getCultures()
    // Default response is an empty list
    return useNetworkRequest(() => getCategories(cultureId), [], dependencies);
}