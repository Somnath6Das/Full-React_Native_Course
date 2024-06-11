/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import logoImg from '../assets/yoga-image.png';

const Images = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      {/* <Image source={logoImg} style={{width: 300, height: 300}} />
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/hand-drawn-illustration-international-yoga-day-celebration_23-2150428039.jpg?t=st=1718047665~exp=1718051265~hmac=570c60d4fae9f6030c5fd50a5752a337113f8b50ab7f1ce9707d2e783d6d543e&w=826',
        }}
        style={{width: 300, height: 300}}
      /> */}
      <ImageBackground source={logoImg} style={{flex: 1}}>
        <Text style={{flex: 1, fontSize: 40, color: 'red'}}>Image Text</Text>
      </ImageBackground>
    </View>
  );
};

export default Images;
