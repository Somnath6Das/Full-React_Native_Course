import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const InputComp = () => {
  const [name, setName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        // secureTextEntry
        // keyboardType="email-address"
        // autoCorrect={false}
        // autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="Message"
        multiline
      />
      <Text style={styles.text}>Your name is {name}</Text>
    </SafeAreaView>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    paddingTop: StatusBar.currentHeight,
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
  multilineText: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
