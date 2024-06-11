/* eslint-disable react-native/no-inline-styles */
import {View, Button} from 'react-native';
import React from 'react';

const BottonComp = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Button
        title="Press"
        color="midnightblue"
        //disabled
        onPress={() => {
          console.log('Button Pressed');
        }}
      />
    </View>
  );
};

export default BottonComp;
