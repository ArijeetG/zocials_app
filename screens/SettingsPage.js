import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
export default function SettingsPage({navigation}) {
  const [email, setEmail] = React.useState('');
  const getEmail = async () => {
    const fetchEmail = await AsyncStorage.getItem('email');
    setEmail(fetchEmail);
  };
  useEffect(() => {
    getEmail();
  }, []);
  return (
    <SafeAreaView>
      {/* <Text style={style.heading}>Settings</Text> */}

      <View style={style.imageContainer}>
        <Image source={require('../assets/BAY.png')} style={style.image} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            marginTop: 10,
            marginBottom: 5,
          }}>
          IMMA_BORED_APE
        </Text>
        <Text
          style={{
            fontSize: 12,
            opacity: 0.5,
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}>
          {email ? email : null}
        </Text>
      </View>
      <Text style={style.subHeading}>General</Text>
      <View style={style.settingsContainer}>
        {/* <TouchableOpacity
          style={style.settings}
          onPress={() => navigation.navigate('Privacy')}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons
              name="privacy-tip"
              size={20}
              style={{marginRight: 7}}
            />
            <Text style={style.settingText}>Privacy</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={style.settings}
          onPress={() => navigation.navigate('Account')}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="account"
              size={20}
              style={{marginRight: 7}}
            />
            <Text style={style.settingText}>Account</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={style.settings}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons
              name="notifications"
              size={20}
              style={{marginRight: 7}}
            />
            <Text style={style.settingText}>Notifications</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>
      <Text style={style.subHeading}>Application</Text>
      <View style={style.settingsContainer}>
        <TouchableOpacity style={style.settings}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons name="storage" size={20} style={{marginRight: 7}} />
            <Text style={style.settingText}>Storage and Location</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={style.settings}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons name="people" size={20} style={{marginRight: 7}} />
            <Text style={style.settingText}>Refer a friend</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 40,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#c24930',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 30,
          }}
          onPress={async () => {
            await AsyncStorage.removeItem('userToken');
            console.log(await AsyncStorage.getItem('userToken'));
            navigation.replace('Signin');
          }}>
          <Text style={{fontWeight: '600', color: 'white'}}> Logout </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: 'blue'}}>Switch to another account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 40,
  },
  image: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginBottom: 5,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  settings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0e0c0',
    padding: 15,
    width: '80%',
    borderRadius: 20,
    marginBottom: 10,
  },
  settingsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontWeight: '600',
  },
  subHeading: {
    marginBottom: 10,
    fontSize: 25,
    opacity: 0.5,
    fontWeight: '600',
    marginLeft: 40,
  },
});
