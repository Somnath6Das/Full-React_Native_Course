import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  name: string;
}

const CustomGreetComp = ({name}: Props) => {
  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  );
};

export default CustomGreetComp;
