import {View, Text, StyleSheet} from 'react-native';
import Box from './Box';
import React from 'react';

const MainRelativeAbsolute = () => {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: '#8e9b00', top: 200, left: 200}}>Box 1</Box>
      <Box style={{backgroundColor: '#b65d1f'}}>Box 2</Box>
      <Box
        style={{
          backgroundColor: '#1c4c56',
          position: 'absolute',
          top: 150,
          left: 150,
        }}>
        Box 3
      </Box>
    </View>
  );
};

export default MainRelativeAbsolute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
});

// position: 'relative', is a default value of a component,

// position: 'relative' gives relative position by giving top, left, right, bottom
//  from perent container.

// position: 'absolute' gives absolute position by giving top, left, right, bottom
//  from perent container. previous space will occupie other component if exists.
