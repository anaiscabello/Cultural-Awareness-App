// Libraries
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import _ from 'lodash';

const styles = StyleSheet.create({
  container: {}
});

export default function CreateInsight({ route }) {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
          <View>
              <Text>Your submission will be verified for accuracy and helpfulness by an administrator.</Text>
          </View>   
          <View>
              <Text>Culture</Text>
          </View>
          <View>
              <TextInput onChangeText={text => setText(text)}></TextInput>
          </View>
          <View>
              <Text>Title of Insight</Text>
          </View>
          <View>
              <TextInput onChangeText={text => setText(text)}></TextInput>
          </View>
          <View>
              <Text>Description</Text>
          </View>
          <View>
              <TextInput onChangeText={text => setText(text)}></TextInput>
          </View>
          <View>
              <Text>Key Insights</Text>
          </View>
          <View>
              
          </View>
          <View>
              <Text>Sources</Text>
          </View>

        </View>
    );
}
