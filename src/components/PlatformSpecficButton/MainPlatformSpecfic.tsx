import CustomButtom from './CustomButton';

import {StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';
import React from 'react';

const MainPlatformSpecfic = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
          <CustomButtom title="Press Me" onPress={() => alert('Pressed')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainPlatformSpecfic;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {padding: 20},
  text: {
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24,
        fontStyle: 'italic',
      },
      android: {
        color: 'blue',
        fontSize: 30,
      },
    }),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
