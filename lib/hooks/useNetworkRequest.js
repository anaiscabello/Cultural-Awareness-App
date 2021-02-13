// Libraries
import React, { useState, useEffect } from 'react';

/**
 * @callback NetworkRequestProvider
 * @returns Promise<any> 
 */

/**
 * A hook to wrap a network request in [ loading, error, response ] format.
 * The {loading} parameter is true if the network request is not yet finished.
 * The {error} parameter corresponds to the Error object, if there was an error. Null otherwise.
 * The {response} parameter is the response of the network request
 * @param {NetworkRequestProvider} makeNetworkRequest The callback which makes the network request. Must return a promise.
 */
export default function useNetworkRequest(makeNetworkRequest, defaultResponse = null, dependencies = []) {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ response, setResponse ] = useState(defaultResponse);

  // Use an effect to make the network request
  useEffect(() => {
    setLoading(true); // Start loading
    setError(null); // No error yet
    makeNetworkRequest()
      .then((newResponse) => {
        setResponse(newResponse);
        setError(null); // Everything went smoothly
      })
      .catch((e) => {
        // Something went wrong during the network request
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies); // Dependencies for this request can be stated during the call

  return [ loading, error, response ];
}