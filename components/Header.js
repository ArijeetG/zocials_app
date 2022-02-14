import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Header() {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
      }}>
      <Image
        source={require('../assets/Zocials.png')}
        style={{
          height: 50,
          width: 140,
        }}
      />
      <TouchableOpacity>
        <MaterialIcons name="search" size={25} />
      </TouchableOpacity>
    </View>
  );
}
