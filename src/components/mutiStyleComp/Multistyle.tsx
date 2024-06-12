import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Multistyle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style inheritance<Text style={styles.boldText}> in bold</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightGreenBox, styles.androidShadow]}>
        <Text>Lighgreen box</Text>
      </View>
      <View style={[styles.box, styles.lightBlueBox, styles.androidShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightYellowBox, styles.androidShadow]}>
        <Text>Lightblue box</Text>
      </View>
    </View>
  );
};

export default Multistyle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  darkMode: {
    backgroundColor: 'black',
  },
  darkModeText: {
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
  box: {
    width: 200,
    height: 200,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
  },
  lightGreenBox: {
    backgroundColor: 'lightgreen',
    borderStyle: 'solid',
    borderRadius: 6,
  },
  lightBlueBox: {
    backgroundColor: 'lightblue',
    borderStyle: 'dashed',
    borderRadius: 6,
  },
  lightYellowBox: {
    backgroundColor: 'lightyellow',
    borderStyle: 'dotted',
    borderRadius: 6,
  },

  androidShadow: {
    elevation: 4,
    shadowColor: '#520202',
  },
});
