// Libraries
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";

export default function WorldMap({ route }) {
  return (
    <View style={styles.container}>
      <ComposableMap projectionConfig={{scale: 500}}>
          <ZoomableGroup>
            <Geographies geography={"https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json"}>
              {({ geographies }) => geographies.map(geography => (
                  <Geography key={geography.rmsKey} geography={geography} />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
