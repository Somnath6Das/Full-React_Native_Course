import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';

const MainResponsiveOne = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

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

export default MainResponsiveOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsalmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
