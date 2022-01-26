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
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default function SignUp({navigation}) {
  const [userSelection, setUserSelection] = React.useState(false);
  const [emailSelection, setEmailSelection] = React.useState(false);
  const [passwordSelection, setPasswordSelection] = React.useState(false);
  const [confirmPasswordSelection, setConfirmPasswordSelection] =
    React.useState(false);

  const [user, setUser] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [consfirmPassword, setConfirmPassword] = React.useState('');

  const submitUser = () => {
    axios
      .post('http://localhost:8000/auth', {
        User: user,
        Email: email,
        Password: password,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Icons
          name="arrow-left"
          size={20}
          style={{marginLeft: 10, opacity: 0.2}}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <View
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
      />
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
          marginLeft: -300,
        }}
      />
      <View style={styles.container}>
        <Image
          source={require('../assets/Zocials.png')}
          style={{marginTop: 200}}
        />
      </View>
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>Login</Text>
        <Text style={styles.subHeaderText}>Please sign in to your account</Text> */}
      </View>
      <View style={{width: '100%', alignItems: 'center', marginTop: 40}}>
        <TextInput
          placeholder="Username"
          style={userSelection ? styles.inputBoxSelected : styles.inputBox}
          onFocus={() => {
            setUserSelection(true);
            setPasswordSelection(false);
            setEmailSelection(false);
            setConfirmPasswordSelection(false);
          }}
          onChangeText={e => setUser(e)}></TextInput>
        <TextInput
          placeholder="Email"
          style={emailSelection ? styles.inputBoxSelected : styles.inputBox}
          placeholder="Email"
          onFocus={() => {
            setEmailSelection(true);
            setUserSelection(false);
            setPasswordSelection(false);
            setConfirmPasswordSelection(false);
          }}
          onChangeText={e => setEmail(e)}></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onFocus={() => {
            setPasswordSelection(true);
            setEmailSelection(false);
            setConfirmPasswordSelection(false);
            setUserSelection(false);
          }}
          style={passwordSelection ? styles.inputBoxSelected : styles.inputBox}
          onChangeText={e => setPassword(e)}></TextInput>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          onFocus={() => {
            setConfirmPasswordSelection(true);
            setPasswordSelection(false);
            setUserSelection(false);
            setEmailSelection(false);
          }}
          style={
            confirmPasswordSelection ? styles.inputBoxSelected : styles.inputBox
          }
          onChangeText={e => setConfirmPassword(e)}></TextInput>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity style={styles.signInButton} onPress={submitUser}>
          <Text style={{color: '#fff', fontSize: 15}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={['#4c669f', '#3b5998', '#192f6a']}
      /> */}
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
