import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import LandingHomePage from '../screens/LandingHomePage';
import SettingsPage from '../screens/SettingsPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import Feed from '../screens/Feed';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavBar() {
  return (
    // <NavigationContainer independent={true}>
    <Tab.Navigator
      backBehavior="history"
      labeled={false}
      initialRouteName="LandingHomePage"
      // inactiveColor="white"
      activeColor="#e91e63"
      backBehavior="history"
      inactiveColor="black"
      barStyle={{
        backgroundColor: 'white',
        // height: 45,
        opacity: 0.9,
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="newspaper-variant"
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LandingHomePage"
        component={LandingHomePage}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
