import {View, Text, Button, Modal} from 'react-native';
import React, {useState} from 'react';

const ModalComp = () => {
  const [isModelVisible, setIsModelVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Button
        title="Open"
        color="midnightblue"
        onPress={() => {
          setIsModelVisible(true);
        }}
      />
      <Modal
        visible={isModelVisible}
        onRequestClose={() => setIsModelVisible(false)}
        animationType="slide">
        <View style={{flex: 1, backgroundColor: 'lightblue', padding: 60}}>
          <Text>Modal Content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => {
              setIsModelVisible(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalComp;
