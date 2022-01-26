import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import LandingHomePage from '../screens/LandingHomePage';
import SettingsPage from '../screens/SettingsPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavBar() {
  return (
    // <NavigationContainer independent={true}>
    <Tab.Navigator
      backBehavior="history"
      labeled={false}
      initialRouteName="LandingHomePage"
      inactiveColor="white"
      activeColor="black"
      barStyle={{
        height: '7%',
      }}
      //   activeColor="#e91e63"
      //   barStyle={{backgroundColor: 'tomato'}}
    >
      <Tab.Screen
        name="LandingHomePage"
        component={LandingHomePage}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
