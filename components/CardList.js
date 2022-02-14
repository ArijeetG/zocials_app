import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function CardList({
  collectorName,
  collectorWorth,
  collectorImage,
  navigation,
}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 5,
          padding: 10,
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.navigate('ItemDefinition', {
            collectorName: collectorName,
            collectorWorth,
            collectorImage,
          })
        }>
        <Image
          source={collectorImage}
          style={{
            width: 60,
            height: 60,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            marginLeft: 10,
            justifyContent: 'center',
          }}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              {collectorName}
            </Text>
            <Text
              style={{
                fontSize: 10,
                opacity: 0.5,
              }}>
              Estimate Worth: ${collectorWorth}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
