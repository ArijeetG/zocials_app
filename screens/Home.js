import {View, Text, SafeAreaView} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import Auth from './Auth';
import SignUp from './SignUp';
import LandingPage from './LandingPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemDefinition from './ItemDefinition';
import Account from './Account';

const Stack = createNativeStackNavigator();

export default function Home() {
  const [userToken, setUserToken] = React.useState('');
  async function checkAuth() {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      setUserToken(token);
    }
  }
  useEffect(() => {
    checkAuth();
  }, [userToken]);
  return (
    <NavigationContainer>
      {!userToken ? (
        <>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Signin" component={Auth} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="LandingPage" component={LandingPage} />

            {/* <Stack.Screen name="Account">
              {props => <Account {...props} token={userToken} />}
            </Stack.Screen> */}
            <Stack.Screen name="ItemDefinition">
              {props => <ItemDefinition {...props} token={userToken} />}
            </Stack.Screen>
            <Stack.Screen name="Account">
              {props => <Account {...props} token={userToken} />}
            </Stack.Screen>
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Signin" component={Auth} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="LandingPage">
              {props => <LandingPage {...props} token={userToken} />}
            </Stack.Screen>
            <Stack.Screen name="ItemDefinition">
              {props => <ItemDefinition {...props} token={userToken} />}
            </Stack.Screen>
            <Stack.Screen name="Account">
              {props => <Account {...props} token={userToken} />}
            </Stack.Screen>
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
