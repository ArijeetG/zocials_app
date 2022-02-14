import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Gallery() {
  const data = [...Array(90).keys()];
  const ImageRow = () => {
    return (
      <View style={styles.imageRow}>
        {[1, 1, 1].map((index, value) => {
          return (
            <TouchableOpacity>
              <Image
                source={require('../assets/BAY.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <ScrollView
      style={{height: 480, width: '100%'}}
      scrollEnabled={true}
      scrollEventThrottle={100}>
      {data.map((value, index) => {
        return <ImageRow />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageRow: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
});
