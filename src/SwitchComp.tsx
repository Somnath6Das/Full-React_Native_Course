import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from 'react-native';
import React, {useState} from 'react';

const SwitchComp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(previous => !previous)}
          trackColor={{false: '#750650', true: '#0746B4'}}
          thumbColor="#FAB704"
        />
      </View>
    </SafeAreaView>
  );
};

export default SwitchComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    paddingTop: StatusBar.currentHeight,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 3,
    borderColor: '#581845',
    borderRadius: 8,
    backgroundColor: '#FFEDF9',
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
});
