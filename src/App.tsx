/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'plum'}}>
      <View style={{width: 200, height: 200, backgroundColor: 'lightblue'}} />
      <View style={{width: 200, height: 200, backgroundColor: 'lightgreen'}} />
    </View>
  );
};

export default App;
