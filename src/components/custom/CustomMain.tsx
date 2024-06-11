import {View, Text} from 'react-native';
import React from 'react';
import CustomGreetComp from './CustomGreetComp';

const CustomMain = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 15}}>
      <CustomGreetComp name="Bruce Wayne" />
      <CustomGreetComp name="Clark Kent" />
    </View>
  );
};

export default CustomMain;
