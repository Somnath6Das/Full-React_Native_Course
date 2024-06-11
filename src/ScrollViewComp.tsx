import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import logo from '../assets/yoga-image.png';

const ScrollViewComp = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 25}}>
      <ScrollView>
        <Image source={logo} style={{width: 300, height: 300}} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          expedita error porro dolorum dolore vitae, cupiditate necessitatibus
          eum unde, aliquid quod rem quisquam perspiciatis quos et incidunt a at
          vel! Suscipit blanditiis pariatur omnis fugit ducimus dolorem,
          aspernatur voluptate. Assumenda praesentium modi corrupti vel quis.
          Eveniet adipisci doloremque non odit?
        </Text>
        <Image source={logo} style={{width: 300, height: 300}} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          expedita error porro dolorum dolore vitae, cupiditate necessitatibus
          eum unde, aliquid quod rem quisquam perspiciatis quos et incidunt a at
          vel! Suscipit blanditiis pariatur omnis fugit ducimus dolorem,
          aspernatur voluptate. Assumenda praesentium modi corrupti vel quis.
          Eveniet adipisci doloremque non odit?
        </Text>
        <Image source={logo} style={{width: 300, height: 300}} />
      </ScrollView>
    </View>
  );
};

export default ScrollViewComp;
