import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import axios from 'axios';

export default function Auth({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailSelection, setEmailSelection] = React.useState(false);
  const [passwordSelection, setPasswordSelection] = React.useState(false);

  const callLogin = () => {
    axios
      .post('http://localhost:8000/signin', {User: email, Password: password})
      .then(async response => {
        console.log('Auth', response.data);
        try {
          await AsyncStorage.setItem('userToken', response.data['token']);
          await AsyncStorage.setItem('email', response.data['email']);
          await AsyncStorage.setItem('username', response.data['username']);
        } catch (error) {
          console.log(error);
        }
        navigation.navigate('LandingPage');
      })
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView>
      {/* <View
        style={{
          width: 440,
          height: 440,
          borderRadius: 440 / 2,
          position: 'absolute',
          zIndex: 0,
          backgroundColor: 'black',
          opacity: 0.1,
          marginTop: 500,
          marginLeft: 150,
        }}
      /> */}
      <View
        style={{
          width: 440,
          height: 440,
          borderRadius: 440 / 2,
          position: 'absolute',
          zIndex: 0,
          backgroundColor: 'black',
          opacity: 0.1,
          marginTop: 80,
          marginLeft: 100,
        }}
      />
      <View style={styles.container}>
        <Image
          source={require('../assets/Zocials.png')}
          style={{marginTop: 220}}
        />
      </View>
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>Login</Text>
        <Text style={styles.subHeaderText}>Please sign in to your account</Text> */}
      </View>
      <View style={{width: '100%', alignItems: 'center', marginTop: 40}}>
        <TextInput
          placeholder="Username"
          style={emailSelection ? styles.inputBoxSelected : styles.inputBox}
          onFocus={() => {
            setEmailSelection(true);
            setPasswordSelection(false);
          }}
          onChangeText={e => {
            setEmail(e);
          }}></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onFocus={() => {
            setPasswordSelection(true);
            setEmailSelection(false);
          }}
          style={passwordSelection ? styles.inputBoxSelected : styles.inputBox}
          onChangeText={e => setPassword(e)}></TextInput>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity style={styles.signInButton} onPress={callLogin}>
          <Text style={{color: '#fff', fontSize: 15}}>Sign In</Text>
        </TouchableOpacity>
      </View>
      {/* <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={['#4c669f', '#3b5998', '#192f6a']}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          //   alignItems: 'center',
          //   flex: 1,
          justifyContent: 'center',
          marginTop: '60%',
          opacity: 0.4,
        }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text
            style={{fontWeight: '800'}}
            onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headerContainer: {
    marginLeft: 80,
  },
  headerText: {
    fontSize: 30,
    marginLeft: 40,
    fontWeight: '800',
    marginTop: 50,
  },
  subHeaderText: {
    opacity: 0.4,
    marginLeft: 40,
    // marginTop: 40,
  },
  inputBoxSelected: {
    marginTop: 10,
    borderRadius: 10,
    width: '80%',
    // borderRightWidth: 1,
    // borderBottomWidth: 1,
    // borderWidth: 0.5,
    padding: 10,
    // borderColor: 'grey',
    backgroundColor: '#fff',
    opacity: 0.5,
    shadowOffset: {
      //   width: 100,
      height: 5,
    },
    shadowColor: '#ad7b5c',
    shadowOpacity: 0.4,
  },
  inputBox: {
    marginTop: 10,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    backgroundColor: '#fff',
    opacity: 0.8,
  },
  signInButton: {
    marginTop: 20,
    marginRight: 40,
    backgroundColor: '#ad7b5c',
    padding: 4,
    width: '20%',
    alignItems: 'center',
    borderRadius: 10,
  },
});
