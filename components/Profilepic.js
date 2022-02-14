import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Profilepic() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/BAY.png')} style={styles.image} />
      <Text style={styles.profilename}>IMMA_BORED_APE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    borderRadius: 50,
    position: 'absolute',
    height: 100,
    width: 100,
    marginTop: -40,
  },
  profilename: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 65,
  },
});
