import {View, Text, SafeAreaView, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavBar from '../components/BottomNavBar';
import detectEthereumProvider from '@metamask/detect-provider';
export default function LandingPage({token}) {
  const getProvider = async () => {
    const provider = await detectEthereumProvider();
    if (!provider) BackHandler.exitApp();
    console.log(provider);
  };

  useEffect(async () => {
    await getProvider();
  }, []);
  // const provider = await detectEthereumProvider();
  // if (!provider) BackHandler.exitApp();

  console.log('Landing Page', token);
  return <BottomNavBar />;
}
