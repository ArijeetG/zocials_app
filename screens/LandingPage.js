import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavBar from '../components/BottomNavBar';
export default function LandingPage({token}) {
  console.log(token);
  return <BottomNavBar />;
}
