import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ItemDefinition({route, navigation}) {
  console.log(route);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          alignItems: 'center',
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
          backgroundColor: 'white',
        }}>
        <ImageBackground
          source={route.params.collectorImage}
          style={{
            height: 550,
            width: 400,
          }}>
          <LinearGradient
            colors={['transparent', '#fff']}
            // start={{x: 0., y: 0.01}}
            style={{
              width: '100%',
              height: 550,
              opacity: 1,
              justifyContent: 'center',
              alignItems: 'center',
              // marginTop: 10,
            }}
          />
        </ImageBackground>
      </View>
      <View
        style={{
          marginTop: -60,
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          activeOpacity={1}>
          <MaterialCommunityIcons name="eye-check-outline" size={25} />
          <Text
            style={{
              marginLeft: 5,
            }}>
            200
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          activeOpacity={1}>
          <MaterialCommunityIcons name="heart" size={25} color="red" />
          <Text
            style={{
              marginLeft: 5,
            }}>
            10
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          paddingHorizontal: 10,
          //   marginTop: -80,
          width: '100%',
          //   borderWidth: 1,
          //   borderRadius: 30,
          //   height: '100%',
          //   marginLeft: 40,
          backgroundColor: '#fff',
          // marginTop: -10,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
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
                }}>
                Bored Ape Yatch Club
              </Text>
              <MaterialIcons name="verified" size={10} />
            </View>
            <Text
              style={{
                fontWeight: 'bold',
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
              <Text
                style={{
                  fontSize: 20,
                }}>
                400
              </Text>
              <MaterialCommunityIcons name="ethereum" size={20} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            Added on
          </Text>
          <Text
            style={{
              fontSize: 10,
            }}>
            24th Jan'22
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 10,
            }}>
            Bored Ape Yacht Club, or simply Bored Ape, is a non-fungible token
            collection on the Ethereum blockchain. The collection features
            profile pictures of apes that are generated by an algorithm. Yuga
            Labs generated the project on April 30, 2021.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#6090db',
              alignItems: 'center',
              padding: 10,
              borderRadius: 30,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Go To OpenSea
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
