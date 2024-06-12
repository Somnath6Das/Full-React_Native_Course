import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Box from './Box';

const MainBox = () => {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: '#FF0000', flex: 1}}>Box 1</Box>
      <Box style={{backgroundColor: '#FF6800', flex: 3}}>Box 2</Box>
      <Box style={{backgroundColor: '#FFC100'}}>Box 3</Box>
      {/* <Box style={{backgroundColor: '#F7FF00'}}>Box 4</Box>
      <Box style={{backgroundColor: '#23FF00'}}>Box 5</Box>
      <Box style={{backgroundColor: '#00FFFB'}}>Box 6</Box>
      <Box style={{backgroundColor: '#0083FF'}}>Box 7</Box>
      <Box style={{backgroundColor: '#3E00FF'}}>Box 8</Box> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column-reverse',
    // flexDirection: 'row',
    flexDirection: 'row-reverse',

    marginTop: 30,
    borderWidth: 6,
    borderColor: '#581845',
  },
});
export default MainBox;
