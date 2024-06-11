/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

const App1 = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Text style={{fontSize: 26}}>
        <Text style={{color: 'white', fontSize: 26}}>Hello</Text>World
      </Text>
    </View>
  );
};

export default App1;
