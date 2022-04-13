import {
  View,
  Text,
  ImageBase,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileCardDisplay({
  navigation,
  collectorName,
  collectorWorth,
  collectorImage,
}) {
  const [username, setUsername] = React.useState('');
  const fetchUsername = async () => {
    const fetch = await AsyncStorage.getItem('username');
    setUsername(username);
  };
  useEffect(() => {}, []);
  return (
    <TouchableOpacity
      style={{
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        borderRadius: 30,
      }}
      onPress={() =>
        navigation.navigate('ItemDefinition', {
          collectorName,
          collectorWorth,
          collectorImage,
        })
      }>
      <ImageBackground
        source={collectorImage}
        style={{
          height: 300,
          width: 350,
        }}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={{
            width: 350,
            height: 300,
            opacity: 1,
            padding: 10,

            flexDirection: 'column-reverse',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    opacity: 0.5,
                    marginRight: 2,
                    color: 'white',
                  }}>
                  Bored Ape Yatch Club
                </Text>
                <MaterialIcons name="verified" size={10} color={'white'} />
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Bored Ape Groups
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={15}
                  color="white"
                />
                <Text
                  style={{
                    marginLeft: 4,
                    color: 'white',
                    fontSize: 15,
                  }}>
                  20
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <MaterialCommunityIcons
                  name="eye-check-outline"
                  size={15}
                  color="white"
                />
                <Text
                  style={{
                    marginLeft: 4,
                    color: 'white',
                    fontSize: 15,
                  }}>
                  50
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
