import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Coverpic from '../components/Coverpic';
import Profilepic from '../components/Profilepic';
import Gallery from '../components/Gallery';
import Header from '../components/Header';

export default function LandingHomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  profilepic: {},
});
