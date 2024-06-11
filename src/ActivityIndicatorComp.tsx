import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const ActivityIndicatorComp = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={false} />
    </View>
  );
};

export default ActivityIndicatorComp;
