import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Header({add = false}) {
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
        {add ? (
          <MaterialIcons name="add-to-photos" size={25} />
        ) : (
          <MaterialIcons name="search" size={25} />
        )}
      </TouchableOpacity>
    </View>
  );
}
