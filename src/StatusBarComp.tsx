import {View, Text, StatusBar} from 'react-native';
import React from 'react';

const StatusBarComp = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="dark-content"
        //  hidden={true}
      />
    </View>
  );
};

export default StatusBarComp;
