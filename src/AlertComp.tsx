import {View, Text, Button, Alert} from 'react-native';
import React from 'react';

const AlertComp = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60, gap: 10}}>
      <Button title="Alert" onPress={() => Alert.alert('Invalid data')} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert('Invalid data!', 'DOB incorrect')}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert('Invalid data!', 'DOB incorrect', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel pressed'),
            },
            {
              text: 'OK',
              onPress: () => console.log('OK pressed'),
            },
          ])
        }
      />
    </View>
  );
};

export default AlertComp;
