import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}

const Box = ({children, style}: Props) => {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'fff',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
