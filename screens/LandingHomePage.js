import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import Coverpic from '../components/Coverpic';
import Profilepic from '../components/Profilepic';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileCardDisplay from '../components/ProfileCardDisplay';

export default function LandingHomePage({navigation}) {
  const nftList = [
    require('../assets/BAY1.png'),
    require('../assets/BAY2.jpeg'),
    require('../assets/collection1.webp'),
    require('../assets/collection2.jpeg'),
    require('../assets/MUTANT.jpeg'),
    require('../assets/BAY.png'),
  ];
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const getEmail = async () => {
    try {
      const fetchEmail = await AsyncStorage.getItem('email');
      const getUser = await AsyncStorage.getItem('username');
      setUsername(getUser);
      setEmail(fetchEmail);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEmail();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header add={true} />
        <View
          style={{
            marginTop: 10,
            padding: 10,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/BAY.png')}
            style={{
              borderRadius: 50,
              height: 60,
              width: 60,
              marginBottom: 5,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              marginTop: 10,
            }}>
            {username ? username : 'IMMA_BORED_APE'}
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            width: '80%',
            marginLeft: 50,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '800',
              }}>
              25
            </Text>
            <Text
              style={{
                opacity: 0.5,
                fontWeight: '500',
              }}>
              NFTs
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '800',
              }}>
              400
            </Text>
            <Text
              style={{
                opacity: 0.5,
                fontWeight: '500',
              }}>
              Following
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '800',
              }}>
              500
            </Text>
            <Text
              style={{
                opacity: 0.5,
                fontWeight: '500',
              }}>
              Followers
            </Text>
          </View>
        </View>
        {/* <View> */}
        {nftList.map(info => {
          return (
            <ProfileCardDisplay
              navigation={navigation}
              collectorImage={info}
              collectorName={username}
              collectorWorth={200}
            />
          );
        })}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});
