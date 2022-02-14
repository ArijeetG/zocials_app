import {View, Text, Image} from 'react-native';
import React from 'react';

export default function GalleryImageContainers() {
  return (
    <View>
      <Image
        source={require('../assets/BAY.png')}
        style={{height: 100, width: 100}}></Image>
    </View>
  );
}
