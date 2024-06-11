/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';
import logo from '../assets/yoga-image.png';

const PressableComp = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 25}}>
      <ScrollView>
        <Pressable onPress={() => console.log('Image Press')}>
          <Image source={logo} style={{width: 300, height: 300}} />
        </Pressable>
        <Pressable onPress={() => console.log('text pressed')}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            expedita error porro dolorum dolore vitae, cupiditate necessitatibus
            eum unde, aliquid quod rem quisquam perspiciatis quos et incidunt a
            at vel! Suscipit blanditiis pariatur omnis fugit ducimus dolorem,
            aspernatur voluptate. Assumenda praesentium modi corrupti vel quis.
            Eveniet adipisci doloremque non odit?
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default PressableComp;
