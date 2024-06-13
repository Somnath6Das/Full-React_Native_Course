import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Box from './Box';

const MainBox = () => {
  return (
    <View style={styles.container}>
      {/* <Box
        style={{
          backgroundColor: '#FF0000',
          // alignSelf: 'flex-start'
        }}>
        Box 1
      </Box> */}
      {/* <Box style={{backgroundColor: '#FF6800', flexShrink: 1}}>
        Box 2 flexShrink
      </Box>
      <Box style={{backgroundColor: '#FFC100', flexShrink: 2}}>
        Box 3 flexShrink
      </Box> */}
      <Box style={{backgroundColor: '#FF6800', flexGrow: 3}}>
        Box 2 flexGrow
      </Box>
      <Box style={{backgroundColor: '#FFC100', flexGrow: 2}}>
        Box 3 flexGrow
      </Box>
      {/* <Box
        style={{
          backgroundColor: '#F7FF00',
          // flexBasis: 140,
          // flex: 1,
        }}>
        Box 4
      </Box>
      <Box
        style={{
          backgroundColor: '#23FF00',
          // height: 140,
          // flex: 1,
        }}>
        Box 5
      </Box>
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
    // flexDirection: 'row-reverse',

    // justifyContent: 'space-between',
    // justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    // justifyContent: 'space-around',
    // justifyContent: 'space-evenly', // for space equely distrubute

    alignItems: 'flex-start',
    // alignItems: 'flex-end',
    // alignItems: 'center',
    // alignItems: 'baseline', // content of box in a same line

    // height: 300,
    // width: 290,
    // flexWrap: 'wrap',
    // flexWrap: 'wrap-reverse',

    // alignContent: 'flex-start',
    // alignContent: 'flex-end',
    // alignContent: 'center',
    // alignContent: 'stretch',
    // alignContent: 'space-between',
    // alignContent: 'space-around',

    // rowGap: 20,
    // columnGap: 20,
    // gap: 10,

    marginTop: 30,
    borderWidth: 6,
    borderColor: '#581845',
  },
});
export default MainBox;

// alignSelf: alignSelf use for one particuler component where as alignItems for use
// for group of component in a container. alignSelf default value is auto which
// inherit the value from alignItems though we can change default value.

// flexBasis: to set a height we can use flexBasis property to giving a initial size,
// If we give flex: 1 to that component the component will increase the size and
// take up the avaiable space.
