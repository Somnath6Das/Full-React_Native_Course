import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// console.log('width:' + windowWidth, 'height:' + windowHeight);

const MainResponsive = () => {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  });
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setDimensions({window});
    });
    return () => subscription?.remove();
  });

  const {window} = dimensions;

  const windowWidth = window.width;
  const windowHeight = window.height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? '70%' : '90%',
            height: windowHeight > 600 ? '60%' : '90%',
          },
        ]}>
        <Text style={{fontSize: windowWidth > 500 ? 50 : 35}}>Welcome!</Text>
      </View>
    </View>
  );
};

export default MainResponsive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsalmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // width: windowWidth > 500 ? '70%' : '90%',
    // height: windowHight > 600 ? '60%' : '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // fontSize: windowWidth > 500 ? 50 : 24,
  },
});
