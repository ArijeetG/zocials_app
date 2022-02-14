import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import Pills from '../components/Pills';
// import {ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from '../components/TopCollectionCarousel';
import CardList from '../components/CardList';
import Header from '../components/Header';

export default function Feed({navigation}) {
  const [searchText, setSearchText] = React.useState('');
  return (
    <SafeAreaView>
      {/* <View style={{maxHeight: Dimensions.get('window').height}}> */}
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          //   height: Dimensions.get('window').height,
          maxHeight: 1000,
          marginTop: 10,
          paddingVertical: 10,
        }}>
        <View style={styles.categories}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Pills text={'Collectibles'} />
            <Pills text={'Tokens'} />
            <Pills text={'Collectibles'} />
            <Pills text={'Tokens'} />
            <Pills text={'Collectibles'} />
            <Pills text={'Tokens'} />
            <Pills text={'Collectibles'} />
            <Pills text={'Tokens'} />
          </ScrollView>
        </View>
        <View style={styles.popularNftCategory}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Popular NFT's
          </Text>
        </View>
        <View>
          <Carousel />
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Featured Artworks
          </Text>
        </View>
        <View>
          <CardList
            navigation={navigation}
            collectorName={'Logan Paul'}
            collectorWorth={304000000}
            collectorImage={require('../assets/collection1.webp')}
          />
          <CardList
            navigation={navigation}
            collectorName={'lil Pump'}
            collectorWorth={5000000000}
            collectorImage={require('../assets/collection2.jpeg')}
          />
          <CardList
            navigation={navigation}
            collectorName={'Snoop Dogg'}
            collectorImage={require('../assets/MUTANT.jpeg')}
            collectorWorth={800000000}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Top Collections
          </Text>
        </View>
        <View>
          <CardList
            collectorName={'Logan Paul'}
            collectorWorth={304000000}
            collectorImage={require('../assets/collection1.webp')}
          />
          <CardList
            collectorName={'lil Pump'}
            collectorWorth={5000000000}
            collectorImage={require('../assets/collection2.jpeg')}
          />
          {/* <CardList
            collectorName={'Snoop Dogg'}
            collectorImage={require('../assets/MUTANT.jpeg')}
            collectorWorth={800000000}
          /> */}
        </View>
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBar: {},
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  categories: {
    flexDirection: 'row',
    marginTop: 10,
  },
  popularNftCategory: {
    marginTop: 20,
    marginLeft: 20,
  },
});
