import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Coverpic() {
  return (
    <Image source={require('../assets/coverpic.jpeg')} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '40%',
    maxHeight: 400,
  },
});
