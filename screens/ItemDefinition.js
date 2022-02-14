import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function ItemDefinition({route, navigation}) {
  console.log(route);
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity>
          <Icons
            name="arrow-left"
            size={20}
            style={{marginLeft: 10, opacity: 0.2}}
            onPress={() => navigation.goBack()}
          />
          {/* <Text>{route.params.collectorName}</Text> */}
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {route.params.collectorName}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '300',
              opacity: 0.5,
            }}>
            ${route.params.collectorWorth}
          </Text>
        </View>
        <View>
          <SimpleIcons name="user-follow" size={20} />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Image
          source={route.params.collectorImage}
          style={{
            height: 300,
            width: 400,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
