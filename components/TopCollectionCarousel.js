import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

import {scrollInterpolator, animatedStyles} from '../utils/Animations';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const DATA = [
  {src: require('../assets/BAY.png')},
  {src: require('../assets/BAY1.png')},
  {src: require('../assets/BAY2.jpeg')},
  {src: require('../assets/MUTANT.jpeg')},
];
// for (let i = 0; i < 10; i++) {
//   DATA.push({src: require('../assets/BAY.png')});
// }

export default class TopCollectionCarousel extends Component {
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }
  _renderItem({item}) {
    return (
      <TouchableOpacity style={styles.itemContainer} activeOpacity={1}>
        <Image
          source={item.src}
          style={{
            width: ITEM_WIDTH,
            height: ITEM_HEIGHT,
            zIndex: 1,
          }}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          ref={c => (this.carousel = c)}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={index => this.setState({index})}
          // scrollInterpolator={scrollInterpolator}
          // slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
          layout={'stack'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 10,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
