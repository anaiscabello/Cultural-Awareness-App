// Libraries
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import _ from 'lodash';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

export default function SubmitInsight({ route }) {
    /** @type {SubmitInsight} */
    const submitInsight = route.params.submitInsight;

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
  