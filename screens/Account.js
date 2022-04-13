import {View, Text, SafeAreaView, TouchableOpacity, Switch} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Account({navigation}) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  return (
    <SafeAreaView>
      <View
        style={{
          width: 440,
          height: 440,
          borderRadius: 440 / 2,
          position: 'absolute',
          zIndex: 0,
          backgroundColor: 'grey',
          opacity: 0.1,
          marginTop: 500,
          marginLeft: 150,
        }}
      />
      <View
        style={{
          width: 440,
          height: 440,
          borderRadius: 440 / 2,
          position: 'absolute',
          zIndex: 0,
          backgroundColor: 'grey',
          opacity: 0.1,
          marginTop: -240,
          marginLeft: 50,
        }}
      />
      <View
        style={{
          padding: 15,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Account
        </Text>
        <Text
          style={{
            fontWeight: '200',
            opacity: 0.5,
            fontStyle: 'italic',
          }}>
          Manage your followers and contents they can see.
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          padding: 10,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: '#d6ceb8',
            padding: 15,
            width: '100%',
            alignItems: 'center',
          }}
          activeOpacity={1}>
          <View>
            <Text
              style={{
                fontWeight: '600',
              }}>
              Hide Profile
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '400',
                opacity: 0.5,
                fontStyle: 'italic',
              }}>
              On enabled, your profile can't be searched.
            </Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: '#d6ceb8',
            padding: 15,
            width: '100%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '600',
            }}>
            Change Password
          </Text>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: '#d6ceb8',
            padding: 15,
            width: '100%',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontWeight: '600',
              }}>
              Manage Collection
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '400',
                opacity: 0.5,
                fontStyle: 'italic',
              }}>
              Remove NFTs from collection
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: '#d6ceb8',
            padding: 15,
            width: '100%',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontWeight: '600',
              }}>
              Edit Profile
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '400',
                opacity: 0.5,
                fontStyle: 'italic',
              }}>
              Change your profile name, picture
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: '#d6ceb8',
            padding: 15,
            width: '100%',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontWeight: '600',
                color: 'red',
              }}>
              Remove Account
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '400',
                opacity: 0.5,
                fontStyle: 'italic',
              }}>
              Delete/deactivate your account
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
