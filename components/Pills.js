import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function Pills({text}) {
  return (
    <TouchableOpacity style={styles.pills}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pills: {
    backgroundColor: '#a8611e',
    alignItems: 'center',
    width: 90,
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 5,
  },
});
